# from flask import Flask, request, jsonify
# from sklearn.feature_extraction.text import CountVectorizer
# from sklearn.metrics.pairwise import cosine_similarity
# import os
# import numpy as np
# import PyPDF2
# import re
# from flask_cors import CORS

# app = Flask(__name__)
# CORS(app)
 
# app.config['MAX_CONTENT_LENGTH'] = 2 * 1024 * 1024 * 1024

# def extract_text_from_pdf(pdf_file):
#     reader = PyPDF2.PdfReader(pdf_file)
#     text = ""
#     for page in reader.pages:
#         text += page.extract_text()
#     return text

# def clean_and_split_text(text):
#     text = re.sub(r'\n+', '\n', text)
#     skills_match = re.search(r'(Skills|SKILLS)(.*?)(Education|EDUCATION|$)', text, re.DOTALL)
#     education_match = re.search(r'(Education|EDUCATION)(.*?)($)', text, re.DOTALL)
#     skills = skills_match.group(2).strip() if skills_match else ""
#     education = education_match.group(2).strip() if education_match else ""
#     return skills, education

# @app.route('/process_resumes', methods=['POST'])
# def process_resumes():
#     files = request.files.getlist("files")
#     job_skills = request.form['skills']
#     job_education = request.form['education']
#     print("Hey in process_resumes")
    
#     scores = []
#     for file in files:
#         text = extract_text_from_pdf(file)
#         skills, education = clean_and_split_text(text)
#         vectorizer = CountVectorizer().fit_transform([job_skills, skills])
#         vectors = vectorizer.toarray()
#         cosine_sim = cosine_similarity(vectors)[0][1]
#         scores.append({'name': file.filename, 'score': cosine_sim * 100})
    
#     sorted_scores = sorted(scores, key=lambda x: x['score'], reverse=True)
#     return jsonify(sorted_scores)

# if __name__ == '__main__':
#     app.run(port=5000)

from flask import Flask, request, jsonify
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import os
import PyPDF2
import re
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Set maximum upload size to 2GB
app.config['MAX_CONTENT_LENGTH'] = 2 * 1024 * 1024 * 1024

def extract_text_from_pdf(pdf_file):
    """Extract text from a PDF file."""
    try:
        reader = PyPDF2.PdfReader(pdf_file)
        text = ""
        for page in reader.pages:
            text += page.extract_text()
        return text
    except Exception as e:
        return f"Error reading PDF: {e}"

def clean_and_split_text(text):
    """Extract skills and education sections from the text."""
    try:
        text = re.sub(r'\n+', '\n', text)
        skills_match = re.search(r'(Skills|SKILLS)(.*?)(Education|EDUCATION|$)', text, re.DOTALL)
        education_match = re.search(r'(Education|EDUCATION)(.*?)($)', text, re.DOTALL)
        skills = skills_match.group(2).strip() if skills_match else "No skills found"
        education = education_match.group(2).strip() if education_match else "No education details found"
        return skills, education
    except Exception as e:
        return "Error processing skills/education", str(e)

@app.route('/process_resumes', methods=['POST'])
def process_resumes():
    """Endpoint to process resumes and compute similarity scores."""
    try:
        files = request.files.getlist("files")
        job_skills = request.form.get('skills', "").strip()
        job_education = request.form.get('education', "").strip()

        if not files:
            return jsonify({"error": "No files uploaded"}), 400
        if not job_skills:
            return jsonify({"error": "Job skills are required"}), 400

        scores = []
        for file in files:
            # Ensure the file is a PDF
            if not file.filename.endswith('.pdf'):
                return jsonify({"error": f"Invalid file type: {file.filename}. Only PDFs are allowed."}), 400

            # Extract and process text
            text = extract_text_from_pdf(file)
            if "Error" in text:
                return jsonify({"error": text}), 500

            skills, education = clean_and_split_text(text)

            # Compute cosine similarity
            vectorizer = CountVectorizer().fit_transform([job_skills, skills])
            vectors = vectorizer.toarray()
            cosine_sim = cosine_similarity(vectors)[0][1]
            scores.append({
                'file_name': file.filename,
                'similarity_score': round(cosine_sim * 100, 2),
                'extracted_skills': skills,
                'extracted_education': education
            })

        # Sort scores in descending order
        sorted_scores = sorted(scores, key=lambda x: x['similarity_score'], reverse=True)
        return jsonify({"status": "success", "data": sorted_scores})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000)
