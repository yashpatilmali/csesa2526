// Navigation functionality
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Scroll effect on navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');

function activateNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', activateNavLink);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Events Data
const eventsData = [
    {
        title: "HUNGRY GEESE",
        category: "pursuit",
        type: "Pursuit",
        description: "An exciting competitive programming event challenging participants with algorithmic problems."
    },
    {
        title: "CID (CODE INVESTIGATION DEPARTMENT)",
        category: "pursuit",
        type: "Pursuit",
        description: "A unique coding investigation challenge where participants solve complex problems."
    },
    {
        title: "EVENT PHASE-1",
        category: "pursuit",
        type: "Pursuit",
        description: "The first phase of our competitive programming series."
    },
    {
        title: "HEAD START TO COMPETITIVE PROGRAMMING",
        category: "skill-development",
        type: "Skill Development",
        description: "A comprehensive workshop introducing students to competitive programming fundamentals."
    },
    {
        title: "CYBER TECH",
        category: "skill-development",
        type: "Skill Development",
        description: "Workshop focusing on cybersecurity technologies and best practices."
    },
    {
        title: "DATABASE & SQL QUERIES",
        category: "skill-development",
        type: "Skill Development",
        description: "Hands-on workshop covering database design and advanced SQL query techniques."
    },
    {
        title: "HEAD START TO WEB DEVELOPMENT",
        category: "skill-development",
        type: "Skill Development",
        description: "Beginner-friendly workshop introducing HTML, CSS, JavaScript and modern web development."
    },
    {
        title: "JUNIOR'S JAM",
        category: "all",
        type: "All",
        description: "An event exclusively for junior students to showcase their skills and creativity."
    },
    {
        title: "MIND MARVELS",
        category: "pursuit",
        type: "Pursuit",
        description: "A challenging puzzle and problem-solving competition."
    },
    {
        title: "PROMPT ENGINEERING",
        category: "pursuit",
        type: "Pursuit",
        description: "Exploring the art and science of prompt engineering for AI systems."
    },
    {
        title: "PROMPT ENGINEERING WORKSHOP",
        category: "pursuit",
        type: "Pursuit",
        description: "Comprehensive workshop on prompt engineering techniques and best practices."
    },
    {
        title: "APP DEVELOPMENT WITH FLUTTER",
        category: "skill-development",
        type: "Skill Development",
        description: "Learn cross-platform mobile app development using Flutter framework."
    },
    {
        title: "TALK WITH SENIORS",
        category: "all",
        type: "All",
        description: "Interactive session where students can learn from experienced seniors."
    }
];

// Last Year Activities Data
const lastYearActivities = [
    {
        title: "WEB DEVELOPMENT BOOTCAMP 2023",
        category: "last-year",
        type: "Last Year Activity",
        description: "Intensive bootcamp covering full-stack web development technologies including React, Node.js, and MongoDB."
    },
    {
        title: "AI & MACHINE LEARNING WORKSHOP",
        category: "last-year",
        type: "Last Year Activity",
        description: "Comprehensive workshop introducing students to artificial intelligence and machine learning concepts with hands-on projects."
    },
    {
        title: "HACKATHON 2023",
        category: "last-year",
        type: "Last Year Activity",
        description: "24-hour coding competition where teams developed innovative solutions to real-world problems."
    },
    {
        title: "DATA STRUCTURES & ALGORITHMS MASTERY",
        category: "last-year",
        type: "Last Year Activity",
        description: "Deep dive into advanced data structures and algorithms with competitive programming focus."
    },
    {
        title: "CYBERSECURITY AWARENESS SESSION",
        category: "last-year",
        type: "Last Year Activity",
        description: "Educational session on cybersecurity best practices and ethical hacking fundamentals."
    },
    {
        title: "OPEN SOURCE CONTRIBUTION DRIVE",
        category: "last-year",
        type: "Last Year Activity",
        description: "Encouraging students to contribute to open source projects and build their developer portfolio."
    }
];

// Team Members Data - Updated for Session 2025-26
const teamData = {
    leadership: [
        {
            name: "Yash Mali",
            role: "President",
            image: "images/team/yash-mali.jpg",
            linkedin: "#",
            github: "#"
        },
        {
            name: "Sakshi Deshmukh",
            role: "Vice President",
            image: "images/team/sakshi-deshmukh.jpg",
            linkedin: "#",
            github: "#"
        },
        {
            name: "Shrushti Raninga",
            role: "Secretary",
            image: "images/team/shrushti-raninga.jpg",
            linkedin: "#",
            github: "#"
        },
        {
            name: "Prasad Shinde",
            role: "Treasurer",
            image: "images/team/prasad-shinde.jpg",
            linkedin: "#",
            github: "#"
        }
    ],
    technical: [
        {
            name: "Vikas More",
            role: "Technical Advisor (Head)",
            image: "images/team/vikas-more.jpg",
            linkedin: "#",
            github: "#"
        },
        {
            name: "Aayush Agrawal",
            role: "Technical Advisor",
            image: "images/team/aayush-agrawal.jpg",
            linkedin: "#",
            github: "#"
        },
        {
            name: "Rahul Pagrut",
            role: "Technical Advisor",
            image: "images/team/rahul-pagrut.jpg",
            linkedin: "#",
            github: "#"
        },
        {
            name: "Vaishnavi Tale",
            role: "Technical Advisor",
            image: "images/team/vaishnavi-tale.jpg",
            linkedin: "#",
            github: "#"
        },
        {
            name: "Shivam Aghao",
            role: "Technical Advisor",
            image: "images/team/shivam-aghao.jpg",
            linkedin: "#",
            github: "#"
        }
    ],
    eventManagement: [
        {
            name: "Sairaj Umbarkar",
            role: "Event Manager (Head)",
            image: "images/team/sairaj-umbarkar.jpg",
            linkedin: "#",
            github: "#"
        },
        {
            name: "Dnyaneshwar Bajad",
            role: "Event Manager",
            image: "images/team/dnyaneshwar-bajad.jpg",
            linkedin: "#",
            github: "#"
        },
        {
            name: "Ganesh Bari",
            role: "Event Manager",
            image: "images/team/ganesh-bari.jpg",
            linkedin: "#",
            github: "#"
        },
        {
            name: "Pallavi Tade",
            role: "Event Manager",
            image: "images/team/pallavi-tade.jpg",
            linkedin: "#",
            github: "#"
        },
        {
            name: "Shruti Bhute",
            role: "Event Manager",
            image: "images/team/shruti-bhute.jpg",
            linkedin: "#",
            github: "#"
        },
        {
            name: "Vedant Tayade",
            role: "Event Manager",
            image: "images/team/vedant-tayade.jpg",
            linkedin: "#",
            github: "#"
        }
    ],
    advertising: [
        {
            name: "Shruti Mankar",
            role: "Advertising Committee Head",
            image: "images/team/shruti-mankar.jpg",
            linkedin: "#",
            github: "#"
        },
        {
            name: "Vasundhara Thakare",
            role: "Advertising Committee Head",
            image: "images/team/vasundhara-thakare.jpg",
            linkedin: "#",
            github: "#"
        },
        {
            name: "Nandan Kulat",
            role: "Advertising Committee Member",
            image: "images/team/nandan-kulat.jpg",
            linkedin: "#",
            github: "#"
        },
        {
            name: "Dhanashri Jain",
            role: "Advertising Committee Member",
            image: "images/team/dhanashri-jain.jpg",
            linkedin: "#",
            github: "#"
        }
    ],
    graphics: [
        {
            name: "Aryan Dewade",
            role: "Graphics Team Member (Head)",
            image: "images/team/aryan-dewade.jpg",
            linkedin: "#",
            github: "#"
        },
        {
            name: "Ritika Chaudhari",
            role: "Graphics Team Member",
            image: "images/team/ritika-chaudhari.jpg",
            linkedin: "#",
            github: "#"
        },
        {
            name: "Pavan Gaikwad",
            role: "Graphics Team Member",
            image: "images/team/pavan-gaikwad.jpg",
            linkedin: "#",
            github: "#"
        }
    ],
    registration: [
        {
            name: "Swami Deshpande",
            role: "Registration Committee Member (Head)",
            image: "images/team/swami-deshpande.jpg",
            linkedin: "#",
            github: "#"
        },
        {
            name: "Vaishnavi Mankhair",
            role: "Registration Committee Member (Head)",
            image: "images/team/vaishnavi-mankhair.jpg",
            linkedin: "#",
            github: "#"
        },
        {
            name: "Tushar Patole",
            role: "Registration Committee Member",
            image: "images/team/tushar-patole.jpg",
            linkedin: "#",
            github: "#"
        },
        {
            name: "Snehal Rangankar",
            role: "Registration Committee Member",
            image: "images/team/snehal-rangankar.jpg",
            linkedin: "#",
            github: "#"
        }
    ],
    members: [
        {
            name: "Shubham Dhakre",
            role: "Team Member Head",
            image: "images/team/shubham-dhakre.jpg",
            linkedin: "#",
            github: "#"
        },
        {
            name: "Pranav Dhurde",
            role: "Member",
            image: "images/team/pranav-dhurde.jpg",
            linkedin: "#",
            github: "#"
        },
        {
            name: "Saurav Dhage",
            role: "Member",
            image: "images/team/saurav-dhage.jpg",
            linkedin: "#",
            github: "#"
        },
        {
            name: "Krushna Falke",
            role: "Member",
            image: "images/team/krushna-falke.jpg",
            linkedin: "#",
            github: "#"
        }
    ]
};

// Render Events
function renderEvents(filter = 'all') {
    const eventsGrid = document.getElementById('eventsGrid');
    if (!eventsGrid) {
        console.error('Events grid not found');
        return;
    }
    
    eventsGrid.innerHTML = '';

    let filteredEvents = [];
    if (filter === 'all') {
        filteredEvents = eventsData;
    } else if (filter === 'last-year') {
        filteredEvents = lastYearActivities || [];
    } else {
        filteredEvents = eventsData.filter(event => event.category === filter);
    }

    if (filteredEvents.length === 0) {
        eventsGrid.innerHTML = `
            <div class="no-events" style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-light);">
                <i class="fas fa-calendar-times" style="font-size: 4rem; margin-bottom: 20px; opacity: 0.5;"></i>
                <h3 style="font-size: 1.5rem; margin-bottom: 10px;">No events found</h3>
                <p>Check back soon for upcoming events!</p>
            </div>
        `;
        return;
    }

    filteredEvents.forEach((event, index) => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        eventCard.style.animationDelay = `${index * 0.1}s`;
        eventCard.style.cursor = 'pointer';
        eventCard.setAttribute('data-event', JSON.stringify(event).replace(/"/g, '&quot;'));
        eventCard.innerHTML = `
            <div class="event-image">
                <div class="event-badge">${event.type}</div>
            </div>
            <div class="event-content">
                <h3 class="event-title">${event.title}</h3>
                <span class="event-category">${event.type}</span>
                <p class="event-description">${event.description}</p>
                <div class="event-read-more">
                    <i class="fas fa-arrow-right"></i> Read More
                </div>
            </div>
        `;
        
        // Add click handler to make event clickable
        (function(eventData) {
            eventCard.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('Event clicked:', eventData.title);
                openEventModal(eventData);
            });
        })(event);
        
        eventsGrid.appendChild(eventCard);
    });
}

// Event Modal Function
function openEventModal(event) {
    // Create modal element if it doesn't exist
    let eventModal = document.getElementById('eventModal');
    if (!eventModal) {
        eventModal = document.createElement('div');
        eventModal.id = 'eventModal';
        eventModal.className = 'event-modal';
        eventModal.innerHTML = `
            <div class="event-modal-overlay"></div>
            <div class="event-modal-content">
                <button class="event-modal-close" id="eventModalClose">
                    <i class="fas fa-times"></i>
                </button>
                <div class="event-modal-body">
                    <div class="event-modal-image">
                        <div class="event-modal-badge"></div>
                    </div>
                    <div class="event-modal-info">
                        <h2 class="event-modal-title"></h2>
                        <span class="event-modal-category"></span>
                        <p class="event-modal-description"></p>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(eventModal);
        
        // Add close handlers
        const closeBtn = eventModal.querySelector('#eventModalClose');
        const overlay = eventModal.querySelector('.event-modal-overlay');
        
        closeBtn.addEventListener('click', closeEventModal);
        overlay.addEventListener('click', closeEventModal);
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && eventModal.classList.contains('active')) {
                closeEventModal();
            }
        });
    }
    
    // Populate modal with event data
    eventModal.querySelector('.event-modal-badge').textContent = event.type;
    eventModal.querySelector('.event-modal-title').textContent = event.title;
    eventModal.querySelector('.event-modal-category').textContent = event.type;
    eventModal.querySelector('.event-modal-description').textContent = event.description;
    
    // Show modal
    eventModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeEventModal() {
    const eventModal = document.getElementById('eventModal');
    if (eventModal) {
        eventModal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Event Filter Functionality - Initialize after DOM loads
function initializeEventFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (filterButtons.length === 0) {
        console.warn('Filter buttons not found');
        return;
    }
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');
            renderEvents(filter);
        });
    });
}

// Render Leadership Heads (including Technical Heads and Event Managers)
function renderHeads() {
    const headsGrid = document.getElementById('headsGrid');
    if (!headsGrid) return;
    
    headsGrid.innerHTML = '';
    
    // Combine leadership, technical heads, and event managers
    const allHeads = [
        ...teamData.leadership,
        ...teamData.technical.filter(member => member.role.includes('Head')),
        ...teamData.eventManagement.filter(member => member.role.includes('Head'))
    ];
    
    allHeads.forEach((member, index) => {
        const headCard = document.createElement('div');
        headCard.className = 'head-card';
        headCard.style.animationDelay = `${index * 0.15}s`;
        headCard.innerHTML = `
            <div class="head-image-wrapper">
                <div class="head-image">
                    <img src="${member.image}" alt="${member.name}" onerror="this.src='https://via.placeholder.com/200x200?text=${member.name.split(' ').map(n => n[0]).join('')}'">
                </div>
                <div class="head-glow"></div>
            </div>
            <div class="head-info">
                <h3 class="head-name">${member.name}</h3>
                <p class="head-role">${member.role}</p>
                <div class="head-social">
                    <a href="${member.linkedin}" target="_blank" class="social-link" title="LinkedIn" onclick="event.stopPropagation();">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href="${member.github}" target="_blank" class="social-link" title="GitHub" onclick="event.stopPropagation();">
                        <i class="fab fa-github"></i>
                    </a>
                </div>
            </div>
        `;
        headsGrid.appendChild(headCard);
        
        // Add click handler for photo modal
        const headImage = headCard.querySelector('.head-image');
        headImage.addEventListener('click', (e) => {
            e.stopPropagation();
            openPhotoModal(member);
        });
    });
}

// Render Team Members
function renderTeamMembers() {
    const categories = ['technical', 'eventManagement', 'advertising', 'graphics', 'registration', 'members'];
    
    categories.forEach(category => {
        const categoryElement = document.getElementById(category);
        if (categoryElement) {
            const teamGrid = categoryElement.querySelector('.team-grid');
            teamGrid.innerHTML = '';

            teamData[category].forEach(member => {
                const memberCard = document.createElement('div');
                memberCard.className = 'team-member';
                memberCard.innerHTML = `
                    <div class="member-image" data-member='${JSON.stringify(member).replace(/'/g, "&#39;")}'>
                        <img src="${member.image}" alt="${member.name}" onerror="this.src='https://via.placeholder.com/150x150?text=${member.name.split(' ').map(n => n[0]).join('')}'">
                    </div>
                    <h4 class="member-name">${member.name}</h4>
                    <p class="member-role">${member.role}</p>
                    <div class="member-social">
                        <a href="${member.linkedin}" target="_blank" class="social-link" title="LinkedIn">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a href="${member.github}" target="_blank" class="social-link" title="GitHub">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                `;
                teamGrid.appendChild(memberCard);
                
                // Add click handler for photo modal
                const memberImage = memberCard.querySelector('.member-image');
                memberImage.addEventListener('click', (e) => {
                    e.stopPropagation();
                    openPhotoModal(member);
                });
            });
        }
    });
}

// Photo Modal Functions
function openPhotoModal(member) {
    const modal = document.getElementById('photoModal');
    const modalImage = document.getElementById('modalImage');
    const modalName = document.getElementById('modalName');
    const modalRole = document.getElementById('modalRole');
    const modalSocial = document.getElementById('modalSocial');
    
    modalImage.src = member.image;
    modalImage.alt = member.name;
    modalName.textContent = member.name;
    modalRole.textContent = member.role;
    
    modalSocial.innerHTML = `
        <a href="${member.linkedin}" target="_blank" class="social-link" title="LinkedIn">
            <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="${member.github}" target="_blank" class="social-link" title="GitHub">
            <i class="fab fa-github"></i>
        </a>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePhotoModal() {
    const modal = document.getElementById('photoModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
        }
    });
}, observerOptions);

// Observe all animated elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.event-card, .team-member, .faculty-card, .vm-card');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Initialize event filters
    initializeEventFilters();
    
    // Render heads section
    renderHeads();
    
    // Render events
    renderEvents('all');
    
    // Render team members
    renderTeamMembers();
    
    // Add fade-in animation to sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.animation = `fadeInUp 0.8s ease forwards`;
        section.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Modal Event Listeners
    const modal = document.getElementById('photoModal');
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = modal?.querySelector('.modal-overlay');
    
    if (modalClose) {
        modalClose.addEventListener('click', closePhotoModal);
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closePhotoModal);
    }
    
    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            closePhotoModal();
        }
    });
    
    // Add click handlers for faculty images
    setTimeout(() => {
        const facultyImages = document.querySelectorAll('.faculty-image');
        facultyImages.forEach(img => {
            img.style.cursor = 'pointer';
            img.addEventListener('click', () => {
                const facultyCard = img.closest('.faculty-card');
                const name = facultyCard.querySelector('h3').textContent;
                const role = facultyCard.querySelector('.faculty-role').textContent;
                const imageSrc = img.querySelector('img').src;
                
                const facultyMember = {
                    name: name,
                    role: role,
                    image: imageSrc,
                    linkedin: '#',
                    github: '#'
                };
                
                openPhotoModal(facultyMember);
            });
        });
    }, 100);
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-background');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add typing effect to hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Form validation (if contact form is added later)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Console message
console.log('%cCSESA Website', 'color: #2563eb; font-size: 20px; font-weight: bold;');
console.log('%cDeveloped by Web Development Team, CSESA', 'color: #6b7280; font-size: 12px;');

