// Particle Background
function initParticleBackground() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];

    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    const particleCount = 100;
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 0.5,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5,
            opacity: Math.random() * 0.5 + 0.3
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw tech grid
        ctx.strokeStyle = 'rgba(108, 63, 207, 0.1)';
        ctx.lineWidth = 1;
        const gridSize = 100;

        for (let x = 0; x < canvas.width; x += gridSize) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
            ctx.stroke();
        }

        for (let y = 0; y < canvas.height; y += gridSize) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
            ctx.stroke();
        }

        // Draw and update particles
        particles.forEach(particle => {
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(108, 63, 207, ${particle.opacity})`;
            ctx.fill();

            particle.x += particle.speedX;
            particle.y += particle.speedY;

            if (particle.x < 0) particle.x = canvas.width;
            if (particle.x > canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = canvas.height;
            if (particle.y > canvas.height) particle.y = 0;
        });

        // Draw connections
        ctx.strokeStyle = 'rgba(108, 63, 207, 0.1)';
        ctx.lineWidth = 0.5;
        particles.forEach((particleA, indexA) => {
            particles.slice(indexA + 1).forEach(particleB => {
                const dx = particleA.x - particleB.x;
                const dy = particleA.y - particleB.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 150) {
                    ctx.beginPath();
                    ctx.moveTo(particleA.x, particleA.y);
                    ctx.lineTo(particleB.x, particleB.y);
                    ctx.globalAlpha = 1 - distance / 150;
                    ctx.stroke();
                    ctx.globalAlpha = 1;
                }
            });
        });

        requestAnimationFrame(animate);
    }

    animate();
}

// Cinematic Orb Animation
function playCinematicOrb(callback) {
    const orbElement = document.getElementById('cinematicOrb');
    const orb = orbElement.querySelector('.orb-container');
    const canvas = document.getElementById('trailCanvas');
    
    if (!orb || !canvas) return;

    orbElement.classList.remove('hidden');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const trail = [];
    const maxTrailLength = 30;

    const waypoints = [
        { x: centerX + 200, y: centerY - 150 },
        { x: centerX - 250, y: centerY + 100 },
        { x: centerX + 150, y: centerY + 180 },
        { x: centerX - 180, y: centerY - 120 }
    ];

    const drawTrail = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        trail.forEach((point, index) => {
            const size = (index / trail.length) * 20 + 5;
            const gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, size);
            gradient.addColorStop(0, `rgba(108, 63, 207, ${point.alpha * 0.6})`);
            gradient.addColorStop(1, 'rgba(108, 63, 207, 0)');
            
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
            ctx.fill();
        });
    };

    const updateTrail = (x, y) => {
        trail.push({ x, y, alpha: 1 });
        if (trail.length > maxTrailLength) {
            trail.shift();
        }
        trail.forEach((point, index) => {
            point.alpha = index / trail.length;
        });
        drawTrail();
    };

    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
        gsap.set(orb, { scale: 3, opacity: 0 });
        setTimeout(() => {
            orbElement.classList.add('hidden');
            callback();
        }, 300);
        return;
    }

    // GSAP Timeline
    const tl = gsap.timeline({
        onComplete: () => {
            setTimeout(() => {
                orbElement.classList.add('hidden');
                callback();
            }, 300);
        }
    });

    gsap.set(orb, { x: 0, y: 0, scale: 0.95, opacity: 1 });

    waypoints.forEach(point => {
        tl.to(orb, {
            x: point.x - centerX,
            y: point.y - centerY,
            duration: 0.8,
            ease: 'sine.inOut',
            onUpdate: () => {
                const rect = orb.getBoundingClientRect();
                updateTrail(rect.left + rect.width / 2, rect.top + rect.height / 2);
            }
        });
    });

    tl.to(orb, {
        x: 0,
        y: 0,
        duration: 1.0,
        ease: 'power2.inOut',
        onUpdate: () => {
            const rect = orb.getBoundingClientRect();
            updateTrail(rect.left + rect.width / 2, rect.top + rect.height / 2);
        }
    });

    tl.to(orb, {
        scale: 4,
        opacity: 0,
        duration: 1.6,
        delay: 0.4,
        ease: 'power2.inOut'
    });

    tl.to(canvas, {
        opacity: 0,
        duration: 0.5
    }, '-=0.5');
}

// Start Dialog
function initStartDialog() {
    const dialog = document.getElementById('startDialog');
    const skipBtn = document.getElementById('skipBtn');
    const scenarioBtns = document.querySelectorAll('.scenario-btn');

    scenarioBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            dialog.classList.add('hidden');
            playCinematicOrb(() => {
                console.log('Orb animation complete');
            });
        });
    });

    skipBtn.addEventListener('click', () => {
        dialog.classList.add('hidden');
    });
}

// Scenario Start Buttons
function initScenarioButtons() {
    const buttons = document.querySelectorAll('.scenario-start');
    
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const scenario = btn.getAttribute('data-scenario');
            if (confirm(`Start ${scenario} training scenario?`)) {
                playCinematicOrb(() => {
                    console.log(`Starting ${scenario} scenario`);
                });
            }
        });
    });
}

// Analytics Counter Animation
function animateCounters() {
    const counters = document.querySelectorAll('.analytics-value');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseFloat(entry.target.getAttribute('data-target'));
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;

                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        entry.target.textContent = target.toFixed(target % 1 !== 0 ? 1 : 0);
                        clearInterval(timer);
                    } else {
                        entry.target.textContent = current.toFixed(target % 1 !== 0 ? 1 : 0);
                    }
                }, 16);

                observer.unobserve(entry.target);
            }
        });
    });

    counters.forEach(counter => observer.observe(counter));
}

// Live Feed Simulation
function initLiveFeed() {
    const feedContainer = document.getElementById('liveFeed');
    const scenarios = ['Earthquake', 'Flood', 'Wildfire', 'Urban Crisis', 'Medical Triage'];
    const names = ['Alex', 'Jordan', 'Sam', 'Casey', 'Morgan', 'Taylor'];

    function addFeedItem() {
        const scenario = scenarios[Math.floor(Math.random() * scenarios.length)];
        const name = names[Math.floor(Math.random() * names.length)];
        const time = new Date().toLocaleTimeString();

        const item = document.createElement('div');
        item.className = 'feed-item';
        item.textContent = `${name} completed ${scenario} training - ${time}`;

        feedContainer.insertBefore(item, feedContainer.firstChild);

        if (feedContainer.children.length > 5) {
            feedContainer.removeChild(feedContainer.lastChild);
        }
    }

    // Add initial items
    for (let i = 0; i < 3; i++) {
        addFeedItem();
    }

    // Add new items periodically
    setInterval(addFeedItem, 5000);
}

// Testimonial Carousel
function initCarousel() {
    const track = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    let currentIndex = 0;
    const cardWidth = 320; // 300px + 20px gap

    nextBtn.addEventListener('click', () => {
        const maxIndex = track.children.length - Math.floor(track.parentElement.offsetWidth / cardWidth);
        if (currentIndex < maxIndex) {
            currentIndex++;
            track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        }
    });

    // Auto-advance
    setInterval(() => {
        const maxIndex = track.children.length - Math.floor(track.parentElement.offsetWidth / cardWidth);
        if (currentIndex < maxIndex) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }, 5000);
}

// Team Lightbox
function initTeamLightbox() {
    const teamMembers = document.querySelectorAll('.team-member');
    const lightbox = document.getElementById('teamLightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxName = document.getElementById('lightboxName');
    const lightboxRole = document.getElementById('lightboxRole');
    const closeBtn = document.getElementById('lightboxClose');

    const teamData = {
        asfiya: { name: 'Asfiya', role: 'Lead Developer' },
        koel: { name: 'Koel', role: 'VR Designer' },
        utkarsh: { name: 'Utkarsh', role: 'AI Engineer' },
        asmita: { name: 'Asmita', role: 'UX Researcher' },
        prudhvi: { name: 'Prudhvi', role: 'Backend Developer' },
        khushi: { name: 'Khushi', role: 'Product Manager' }
    };

    teamMembers.forEach(member => {
        member.addEventListener('click', () => {
            const memberKey = member.getAttribute('data-member');
            const data = teamData[memberKey];
            
            lightboxImg.src = `src/assets/team/${memberKey}.jpg`;
            lightboxName.textContent = data.name;
            lightboxRole.textContent = data.role;
            lightbox.classList.remove('hidden');
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.classList.add('hidden');
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.add('hidden');
        }
    });
}

// Mobile Menu
function initMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const nav = document.querySelector('.nav');

    menuBtn.addEventListener('click', () => {
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
        if (nav.style.display === 'flex') {
            nav.style.position = 'absolute';
            nav.style.top = '100%';
            nav.style.left = '0';
            nav.style.right = '0';
            nav.style.background = 'rgba(5, 8, 16, 0.98)';
            nav.style.flexDirection = 'column';
            nav.style.padding = '20px';
            nav.style.gap = '20px';
        }
    });
}

// Hero CTA
function initHeroCTA() {
    const heroStartBtn = document.getElementById('heroStartBtn');
    const dialog = document.getElementById('startDialog');

    heroStartBtn.addEventListener('click', () => {
        dialog.classList.remove('hidden');
    });

    // Also handle header CTA
    const ctaBtn = document.querySelector('.cta-btn');
    if (ctaBtn) {
        ctaBtn.addEventListener('click', () => {
            dialog.classList.remove('hidden');
        });
    }
}

// Smooth Scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Initialize Everything
document.addEventListener('DOMContentLoaded', () => {
    initParticleBackground();
    initStartDialog();
    initScenarioButtons();
    animateCounters();
    initLiveFeed();
    initCarousel();
    initTeamLightbox();
    initMobileMenu();
    initHeroCTA();
    initSmoothScroll();
});