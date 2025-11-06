#!/usr/bin/env python3
import http.server
import socketserver
from pathlib import Path

PORT = 8000

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add CORS headers
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()
    
    def guess_type(self, path):
        mime_type, encoding = super().guess_type(path)
        
        # Override MIME type for .jsx files
        if path.endswith('.jsx'):
            mime_type = 'text/javascript'
        # Override MIME type for .js files
        elif path.endswith('.js'):
            mime_type = 'text/javascript'
        
        return mime_type, encoding

with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
    print(f"Server running at http://localhost:{PORT}/")
    print("Press Ctrl+C to stop the server")
    httpd.serve_forever()

