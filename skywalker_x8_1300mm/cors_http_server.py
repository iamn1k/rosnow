#!/usr/bin/env python3
from http.server import HTTPServer, SimpleHTTPRequestHandler

class CORSRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        return super(CORSRequestHandler, self).end_headers()

if __name__ == '__main__':
    port = 8000  # You can change this to any port you prefer
    httpd = HTTPServer(('localhost', port), CORSRequestHandler)
    print(f"Serving on http://localhost:{port}")
    httpd.serve_forever()