from pathlib import Path
import sys
try:
    from PyPDF2 import PdfReader
except Exception:
    import subprocess
    subprocess.check_call([sys.executable, '-m', 'pip', 'install', 'pypdf2'])
    from PyPDF2 import PdfReader

p = Path(__file__).resolve().parents[1] / 'public' / 'resume.pdf'
if not p.exists():
    print('ERROR: resume.pdf not found at', p)
    sys.exit(1)
reader = PdfReader(str(p))
text_parts = []
for page in reader.pages:
    t = page.extract_text()
    if t:
        text_parts.append(t)
out = '\n\n'.join(text_parts)
out_path = p.parent / 'resume.txt'
out_path.write_text(out, encoding='utf-8')
print('OK', out_path)
