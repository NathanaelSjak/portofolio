<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>{{ config('app.name', 'Portfolio') }} — {{ 'Nathanael Sjak' }}</title>

        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700" rel="stylesheet" />
        <script>
            tailwind.config = {
                theme: {
                    extend: {
                        fontFamily: {
                            sans: [
                                'Instrument Sans', 'ui-sans-serif', 'system-ui', 'sans-serif',
                                'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'
                            ]
                        }
                    }
                }
            }
        </script>
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="min-h-screen bg-[#0a0a0a] text-white antialiased">
        <div class="absolute inset-0 -z-10 overflow-hidden">
            <div class="absolute -top-40 -left-40 h-96 w-96 rounded-full blur-3xl opacity-30" style="background: radial-gradient(closest-side, #F61500, transparent)"></div>
            <div class="absolute top-20 right-0 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-25" style="background: radial-gradient(closest-side, #3E3E3A, transparent)"></div>
        </div>

        <header class="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
            <a href="/" class="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors">
                <span class="w-3 h-3 rounded-full bg-[#F61500]"></span>
                <span class="font-semibold tracking-wide">Nathanael</span>
            </a>
            <nav class="hidden md:flex items-center gap-6 text-sm text-white/70">
                <a href="#about" class="hover:text-white transition-colors">About</a>
                <a href="#projects" class="hover:text-white transition-colors">Projects</a>
                <a href="#skills" class="hover:text-white transition-colors">Skills</a>
                <a href="#contact" class="hover:text-white transition-colors">Contact</a>
            </nav>
        </header>

        <main>
            <section class="max-w-7xl mx-auto px-6 pt-10 pb-16">
                <div class="grid md:grid-cols-2 items-center gap-10">
                    <div>
                        <p class="text-[#A1A09A] text-sm mb-3">PORTFOLIO</p>
                        <h1 class="text-4xl md:text-6xl font-semibold leading-[1.05]">
                            Hi, I’m <span class="text-transparent bg-clip-text" style="background-image:linear-gradient(90deg,#FF4433,#F8B803)">Nathanael Sjaklif</span>.<br/>
                            I am a full-stack developer.
                        </h1>
                        <p class="text-white/70 mt-5 max-w-prose">
                            Full‑stack developer focused on clean architecture, accessible UI, and performant Laravel + JS apps. I love turning ideas into polished products.
                        </p>
                        <div class="flex items-center gap-3 mt-8">
                            <a href="#projects" class="px-5 py-2 rounded-sm bg-white text-[#0a0a0a] border border-white hover:bg-transparent hover:text-white transition-colors">View Projects</a>
                            <a href="#contact" class="px-5 py-2 rounded-sm border border-white/30 hover:border-white transition-colors">Contact Me</a>
                        </div>
                        <div class="flex items-center gap-4 mt-8 text-white/60">
                            <span class="text-xs">GO</span>
                            <span class="text-xs">Kotlin</span>
                            <span class="text-xs">React</span>
                            <span class="text-xs">MySQL</span>
                        </div>
                    </div>
                    <div class="relative">
                        <div class="absolute -inset-1 rounded-3xl opacity-40 blur-xl" style="background:linear-gradient(135deg,#FF4433 0%,#F8B803 100%)"></div>
                        <div class="relative rounded-3xl overflow-hidden border border-white/10 bg-[#111]">
                            <img src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1200&auto=format&fit=crop" alt="Code workspace" class="w-full h-80 md:h-[28rem] object-cover"/>
                        </div>
                    </div>
                </div>
            </section>

            <section id="projects" class="max-w-7xl mx-auto px-6 py-16 border-t border-white/10">
                <div class="flex items-end justify-between mb-8">
                    <h2 class="text-2xl md:text-3xl font-semibold">Featured Projects</h2>
                </div>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <article class="group rounded-xl overflow-hidden border border-white/10 bg-[#121212] hover:border-white/20 transition-colors cursor-pointer" onclick="openModal('njotify')">
                        <img src="{{ asset('images/njotify.png') }}" alt="NJotify" class="h-44 w-full object-cover"/>
                        <div class="p-5">
                            <h3 class="font-medium group-hover:text-white">NJotify</h3>
                            <p class="text-sm text-white/60 mt-2">Spotify clone built with Go and React.</p>
                            <div class="flex gap-2 mt-3 text-[11px] text-white/60">
                                <span class="px-2 py-0.5 rounded-sm bg-white/5 border border-white/10">GO</span>
                                <span class="px-2 py-0.5 rounded-sm bg-white/5 border border-white/10">React</span>
                                <span class="px-2 py-0.5 rounded-sm bg-white/5 border border-white/10">Pure CSS</span>
                            </div>
                        </div>
                    </article>
                    <article class="group rounded-xl overflow-hidden border border-white/10 bg-[#121212] hover:border-white/20 transition-colors cursor-pointer" onclick="openModal('neptune')">
                        <img src="{{ asset('images/neptune.png') }}" alt="Neptune" class="h-44 w-full object-cover"/>
                        <div class="p-5">
                            <h3 class="font-medium group-hover:text-white">Neptune</h3>
                            <p class="text-sm text-white/60 mt-2">Competitive programming application with Go and React.</p>
                            <div class="flex gap-2 mt-3 text-[11px] text-white/60">
                                <span class="px-2 py-0.5 rounded-sm bg-white/5 border border-white/10">GO</span>
                                <span class="px-2 py-0.5 rounded-sm bg-white/5 border border-white/10">React</span>
                                <span class="px-2 py-0.5 rounded-sm bg-white/5 border border-white/10">PostgreSQL</span>
                            </div>
                        </div>
                    </article>
                    <article class="group rounded-xl overflow-hidden border border-white/10 bg-[#121212] hover:border-white/20 transition-colors cursor-pointer" onclick="openModal('zone-lone')">
                        <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop" alt="Zone Lone" class="h-44 w-full object-cover"/>
                        <div class="p-5">
                            <h3 class="font-medium group-hover:text-white">Zone Lone</h3>
                            <p class="text-sm text-white/60 mt-2">Sleep aid & relaxation app with ambient sounds.</p>
                            <div class="flex gap-2 mt-3 text-[11px] text-white/60">
                                <span class="px-2 py-0.5 rounded-sm bg-white/5 border border-white/10">Kotlin</span>
                                <span class="px-2 py-0.5 rounded-sm bg-white/5 border border-white/10">Jetpack Compose</span>
                                <span class="px-2 py-0.5 rounded-sm bg-white/5 border border-white/10">Firebase</span>
                            </div>
                        </div>
                    </article>
                    <article class="group rounded-xl overflow-hidden border border-white/10 bg-[#121212] hover:border-white/20 transition-colors cursor-pointer" onclick="openModal('phishing-detection')">
                        <img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop" alt="Phishing Detection" class="h-44 w-full object-cover"/>
                        <div class="p-5">
                            <h3 class="font-medium group-hover:text-white">Phishing Email Detection</h3>
                            <p class="text-sm text-white/60 mt-2">ML-powered system to classify emails as phishing or legitimate.</p>
                            <div class="flex gap-2 mt-3 text-[11px] text-white/60">
                                <span class="px-2 py-0.5 rounded-sm bg-white/5 border border-white/10">Python</span>
                                <span class="px-2 py-0.5 rounded-sm bg-white/5 border border-white/10">Flask</span>
                                <span class="px-2 py-0.5 rounded-sm bg-white/5 border border-white/10">scikit-learn</span>
                            </div>
                        </div>
                    </article>
                    <article class="group rounded-xl overflow-hidden border border-white/10 bg-[#121212] hover:border-white/20 transition-colors cursor-pointer" onclick="openModal('fitbuddy')">
                        <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop" alt="FitBuddy" class="h-44 w-full object-cover"/>
                        <div class="p-5">
                            <h3 class="font-medium group-hover:text-white">FitBuddy</h3>
                            <p class="text-sm text-white/60 mt-2">Fitness companion app for workout routines and progress tracking.</p>
                            <div class="flex gap-2 mt-3 text-[11px] text-white/60">
                                <span class="px-2 py-0.5 rounded-sm bg-white/5 border border-white/10">Kotlin</span>
                                <span class="px-2 py-0.5 rounded-sm bg-white/5 border border-white/10">Firebase</span>
                                <span class="px-2 py-0.5 rounded-sm bg-white/5 border border-white/10">XML</span>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            <section id="skills" class="max-w-7xl mx-auto px-6 py-16 border-t border-white/10">
                <h2 class="text-2xl md:text-3xl font-semibold mb-6">Skills</h2>
                <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div class="rounded-xl border border-white/10 bg-[#121212] p-5">
                        <p class="text-sm text-white/60">Languages</p>
                        <p class="mt-2">PHP, JavaScript, TypeScript, SQL, Go, Kotlin</p>
                    </div>
                    <div class="rounded-xl border border-white/10 bg-[#121212] p-5">
                        <p class="text-sm text-white/60">Frameworks</p>
                        <p class="mt-2">Laravel, Livewire, Vue, React, Tailwind</p>
                    </div>
                    <div class="rounded-xl border border-white/10 bg-[#121212] p-5">
                        <p class="text-sm text-white/60">Tools</p>
                        <p class="mt-2">Git, Docker, npm, Tailwind, Vite</p>
                    </div>
                    <div class="rounded-xl border border-white/10 bg-[#121212] p-5">
                        <p class="text-sm text-white/60">Databases</p>
                        <p class="mt-2">MySQL, SQLite, Redis, PostgreSQL, Firebase</p>
                    </div>
                </div>
            </section>

            <section id="about" class="max-w-7xl mx-auto px-6 py-16 border-t border-white/10">
                <div class="grid md:grid-cols-3 gap-8 items-start">
                    <div class="md:col-span-1">
                        <h2 class="text-2xl md:text-3xl font-semibold">About me</h2>
                    </div>
                    <div class="md:col-span-2 text-white/80 leading-relaxed">
                        <p>
                            As a Junior Laboratory Assistant at BINUS University, I combine my passion for technology with hands-on problem-solving to support our academic community. My role involves leveraging a diverse skill set—including Node.js, OOP, Go, Python, SQL, and cloud technologies—to develop practical solutions that enhance learning and research.

Currently pursuing my Computer Science degree (expected 2027), I’m committed to merging theoretical knowledge with real-world applications—whether through assisting students, optimizing lab tools, or contributing to open-source projects.
                        </p>
                    </div>
                </div>
            </section>

            <section id="contact" class="max-w-7xl mx-auto px-6 py-16 border-t border-white/10">
                <div class="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-8 md:p-10">
                    <h2 class="text-2xl md:text-3xl font-semibold">Let’s build something</h2>
                    <p class="text-white/70 mt-2 max-w-prose">Got an idea or opportunity? I’m open to freelance and collaborations.</p>
                    <div class="mt-6 flex flex-wrap items-center gap-3">
                        <a href="https://www.linkedin.com/in/nathanael-sjaklif-9092872a8/" target="_blank" class="px-5 py-2 rounded-sm border border-white/30 hover:border-white transition-colors">LinkedIn</a>
                        <a href="https://github.com/NathanaelSjak" target="_blank" class="px-5 py-2 rounded-sm border border-white/30 hover:border-white transition-colors">GitHub</a>
                    </div>
                </div>
            </section>
        </main>

        <footer class="max-w-7xl mx-auto px-6 py-10 text-sm text-white/60">
            <div class="flex flex-col md:flex-row gap-3 items-start md:items-center justify-between">
                <p>© {{ date('Y') }} Nathanael Sjak. All rights reserved.</p>
                <p>Built with Laravel & Tailwind.</p>
            </div>
        </footer>

        <!-- Project Modal -->
        <div id="projectModal" class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 hidden items-center justify-center p-6">
            <div class="bg-[#121212] border border-white/10 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div class="p-6 md:p-8">
                    <div class="flex items-start justify-between mb-6">
                        <h3 id="modalTitle" class="text-2xl md:text-3xl font-semibold"></h3>
                        <button onclick="closeModal()" class="text-white/60 hover:text-white transition-colors">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div id="modalContent" class="text-white/80 leading-relaxed space-y-4"></div>
                </div>
            </div>
        </div>

        <script>
            const projects = {
                'njotify': {
                    title: 'NJotify',
                    description: 'A full-stack music streaming web application inspired by Spotify, featuring a Vite + React frontend with pure CSS styling, a Golang backend, and a PostgreSQL database. The platform replicates Spotify\'s essential features while adding an AI-driven song title recognition capability.\n\nAs a developer on this challenging group project for the Assistant Potential Test at the Software Laboratory Center (SLC), I worked across the entire technology stack. My contributions included building responsive UI components, developing backend API endpoints, designing the database schema, and integrating an AI-based classification system to recognize song titles from user input. This full-stack experience greatly enhanced my technical skills by exposing me to end-to-end web application architecture, API design, database optimization, and practical AI integration. It also deepened my understanding of the complexities behind interconnected systems and strengthened my drive to become a versatile developer who can merge frontend design with reliable backend functionality to deliver engaging user experiences.'
                },
                'neptune': {
                    title: 'Neptune: Competitive Programming & Class Management Platform',
                    description: 'A full-stack web application designed to support competitive programming activities and class management within an academic setting. The system provides tailored dashboards for Admins, Students, and Assistants, enabling seamless contest organization, code submission evaluation, and performance tracking.\n\nAs a developer on the NEPTUNE project, I contributed across the full stack by implementing responsive dashboards for different user roles (Admin, Student, Assistant), building backend API endpoints for contest and submission management, and designing the PostgreSQL schema to support scalable role-based access. I also worked on the real-time code evaluation feature that provides students with instant feedback on their submissions, including correctness, execution time, and memory usage.'
                },
                'zone-lone': {
                    title: 'Zone Lone: Sleep Aid & Relaxation App',
                    description: 'A mobile application built with Kotlin, Jetpack Compose, and Firebase that helps users improve their sleep quality by offering ambient sounds, customizable alarms, and soothing audio stories. The app creates a calming, personalized experience to help you relax, unwind, and enjoy a restful night.\n\nAs the lead Android developer in this two-person group project, I was responsible for implementing the core functionality of Zone Lone, including ambient sound playback, customizable alarm features, Firebase integration, and the overall app architecture. I collaborated closely with my partner, who focused on UI design and audio storytelling integration. This development process greatly improved my teamwork and coding skills while deepening my understanding of modern Android architecture. I gained hands-on experience with the MVVM pattern, effective state management using Jetpack Compose, and optimizing Firebase for seamless media handling. These experiences showcased our ability to turn an idea into a fully functional product that delivers a calming, personalized sleep aid experience for users.'
                },
                'phishing-detection': {
                    title: 'Phishing Email Detection System',
                    description: 'A machine learning–powered web application designed to classify emails as phishing or legitimate in real time. The system was built with Python, scikit-learn, Flask, and Railway for deployment, combining natural language processing techniques with a cloud-hosted API for accessibility that is made into an extension.\n\nAs the developer of this project, I was responsible for the entire end-to-end pipeline of the Phishing Email Detection System. I collected and cleaned the dataset, applied TF-IDF vectorization for feature extraction, and trained a machine learning model to classify emails as phishing or legitimate. I then integrated the trained model into a Flask web application, built a REST API endpoint for real-time predictions, and deployed the system on Railway to make it accessible online. Through this project, I strengthened my skills in machine learning, natural language processing, backend API development, and cloud deployment, while gaining practical experience in delivering an ML model as a functional, user-accessible application.'
                },
                'fitbuddy': {
                    title: 'FitBuddy: Fitness Companion App',
                    description: 'A mobile application built with Kotlin, Firebase, and XML that helps users establish consistent workout routines and track their fitness progress. The app provides a customizable weekly workout scheduler, allowing users to assign training focuses to specific days (e.g., chest on Monday, back on Tuesday).'
                }
            };

            function openModal(projectId) {
                const project = projects[projectId];
                if (project) {
                    document.getElementById('modalTitle').textContent = project.title;
                    document.getElementById('modalContent').innerHTML = project.description.replace(/\n\n/g, '</p><p class="mt-4">').replace(/\n/g, '<br>');
                    document.getElementById('projectModal').classList.remove('hidden');
                    document.getElementById('projectModal').classList.add('flex');
                    document.body.style.overflow = 'hidden';
                }
            }

            function closeModal() {
                document.getElementById('projectModal').classList.add('hidden');
                document.getElementById('projectModal').classList.remove('flex');
                document.body.style.overflow = 'auto';
            }

            // Close modal when clicking outside
            document.getElementById('projectModal').addEventListener('click', function(e) {
                if (e.target === this) {
                    closeModal();
                }
            });

            // Close modal with Escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    closeModal();
                }
            });
        </script>
    </body>
</html>


