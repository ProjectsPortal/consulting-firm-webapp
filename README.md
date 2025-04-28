# Aspyn Consulting Web Application

Lightweight, full-stack Django web application designed for a mock consulting firm.
Features responsive design, mobile optimization, secure static file handling, and real production deployment to a live domain.

Built with Django 4.2, custom CSS/JS, and deployed via Heroku.

---

## Overview

This project delivers a fully responsive web application for a hypothetical consulting firm, simulating a real-world client engagement. It demonstrates:

- End-to-end web development with Django
- Full-stack deployment practices (Gunicorn, Whitenoise, environment variables)
- Mobile-first responsive design
- Secure, scalable static asset handling
- Minimalist JavaScript UX enhancements

The project highlights the ability to build and deploy production-grade applications while balancing technical precision and user experience.

A live version is hosted [here](https://yourdomainhere.com) (HTTPS-secured).

---

## Features

- Responsive homepage with dynamic banner and modular content sections
- Mobile-optimized navigation with hamburger menu and click-off behavior
- Dark-themed visual design with structured featured blocks
- Dynamic text/image alternation across content blocks
- Fully secured domain with HTTPS
- Backend powered by Django ORM and settings
- Configurable for local SQLite development or cloud-hosted Postgres
- Production-ready deployment pipeline via Heroku
- Lightweight vanilla JavaScript for mobile UX (no external JS libraries)

---

## Application Interface

The web application offers a clean, modern interface designed for strategic communication:

- Welcome banner with animated logo and brand messaging
- Featured content sections: "Your Vision," "Our Approach," "Capabilities," "Call to Action"
- Strategic use of curated images alongside structured text blocks
- Smooth transitions across mobile, tablet, and desktop devices

<p align="center">
  <img src="images/mobile_view_example.png" alt="Mobile View Example" width="300"/>
</p>

<p align="center"><em>Figure: Mobile-optimized view with responsive grid adjustment.</em></p>

---

## Technology Stack

| Component             | Technology                                      |
|:----------------------|:------------------------------------------------|
| Backend Framework     | Django 4.2                                       |
| Web Server             | Gunicorn                                         |
| Static Files Handling  | Whitenoise                                       |
| Environment Variables  | python-decouple                                  |
| Deployment Platform    | Heroku                                           |
| Frontend Styling       | Custom CSS grid (mobile-first responsive design) |
| Frontend Interactivity | Vanilla JavaScript                               |

---

## System Design Details

- **Django Settings:**
  - Environment-driven secret keys and database configs
  - Secure HTTPS redirection and static file serving

- **Static Assets:**
  - Images, CSS, and JS organized under `mainapp/static/`
  - Whitenoise serves assets in production

- **Database:**
  - Configurable SQLite (dev) or external Postgres (production)

- **Deployment:**
  - Gunicorn WSGI server
  - `Procfile` for Heroku deployment
  - Heroku environment variables managed securely

- **Mobile Optimization:**
  - 12-column CSS grid with responsive collapse below 1050px
  - Adaptive banner resizing
  - Optimized font sizing and paddings for handheld devices

- **JavaScript Behavior:**
  - Toggling mobile nav menu
  - Closing dropdown menus on outside click

---

## Installation (Local Development)

### Requirements
- Python 3.10+
- pip (Python package installer)

### Setup
```bash
# Clone the repository
git clone https://github.com/yourgithub/consulting-firm-webapp.git
cd consulting-firm-webapp

# Create a virtual environment
python -m venv env
source env/bin/activate  # macOS/Linux
# OR
env\Scripts\activate.bat # Windows

# Install dependencies
pip install -r requirements.txt

# Run migrations (if database used)
python manage.py migrate

# Start local server
python manage.py runserver
```

Then open `http://127.0.0.1:8000/` in your browser.

---

## Project Structure

```
consulting-firm-webapp/
├── aspyn/                    # Django project settings and WSGI application
├── mainapp/                  # Django app with views, templates, static assets
├── static/                   # Collected static files for production
├── requirements.txt          # Python dependencies
├── Procfile                  # Heroku deployment configuration
├── manage.py                 # Django project runner
└── README.md                  # Project documentation
```

---

## License

This project is released under the **Creative Commons Zero v1.0 Universal (CC0 1.0)** license.
Commercial reproduction of custom images and styling is discouraged.

---

## Acknowledgements

- Django: https://www.djangoproject.com/
- Gunicorn: https://gunicorn.org/
- Whitenoise: https://whitenoise.evans.io/
- Heroku: https://www.heroku.com/

---

> 📊 **Professional Note:** This project represents a mock consulting firm site, intended to simulate real-world client deliverables. It highlights both backend configuration and frontend design proficiency while maintaining production deployment standards.

---

Ready to push when you are! (We can also customize slightly depending on domain name or if you want to add any screenshots before finalizing.)

