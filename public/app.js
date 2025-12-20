const hotels = [
            {id: 1, name: "Grand Luxe Palace", category: "Luxury", price: 37500, description: "Experience unparalleled luxury in our 5-star palace hotel featuring a world-class spa, infinity rooftop pool with panoramic city views, and Michelin-starred dining. Each suite is elegantly appointed with premium furnishings and state-of-the-art amenities.", location: "Mumbai, Maharashtra", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500", amenities: ["Free WiFi", "Swimming Pool", "Spa & Wellness", "Fine Dining", "Valet Parking", "24/7 Room Service"]},
            {id: 2, name: "Seaside Resort", category: "Beach", price: 26600, description: "Wake up to breathtaking ocean views at our exclusive beachfront resort. Enjoy private beach access, water sports, sunset dinners by the shore, and luxurious rooms with balconies overlooking the Arabian Sea.", location: "Goa", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500", amenities: ["Private Beach", "Water Sports", "Beachside Restaurant", "Infinity Pool", "Yoga Classes", "Free WiFi"]},
            {id: 3, name: "Mountain Peak Lodge", category: "Mountain", price: 23300, description: "Nestled in the serene Himalayas, our cozy mountain lodge offers spectacular valley views, guided trekking tours, bonfire evenings, and warm hospitality. Perfect for nature lovers and adventure seekers.", location: "Manali, Himachal Pradesh", image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500", amenities: ["Mountain View", "Trekking Tours", "Bonfire Nights", "Restaurant", "Free Parking", "Garden"]},
            {id: 4, name: "City Center Inn", category: "Business", price: 15000, description: "Strategically located in the heart of the business district, our modern hotel offers fully-equipped conference rooms, high-speed internet, executive lounges, and easy access to major corporate offices and airports.", location: "Bangalore, Karnataka", image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=500", amenities: ["Business Center", "Conference Rooms", "High-Speed WiFi", "Airport Shuttle", "Gym", "Restaurant"]},
            {id: 5, name: "Budget Stay Express", category: "Budget", price: 6250, description: "Clean, comfortable, and affordable accommodation perfect for budget-conscious travelers. We provide all essential amenities, friendly service, and a convenient location near public transport.", location: "Delhi", image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=500", amenities: ["Free WiFi", "Clean Rooms", "24/7 Reception", "Breakfast", "AC Rooms", "Laundry"]},
            {id: 6, name: "Boutique Charm Hotel", category: "Boutique", price: 18300, description: "A unique boutique experience featuring locally inspired decor, curated art collections, artisan furnishings, and personalized service. Each room tells a story of local culture and craftsmanship.", location: "Jaipur, Rajasthan", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500", amenities: ["Art Gallery", "Unique Design", "Rooftop Cafe", "Free WiFi", "Cultural Tours", "Library"]},
            {id: 7, name: "Family Fun Resort", category: "Family", price: 29100, description: "All-inclusive family paradise with dedicated kids club, multiple swimming pools, water slides, family entertainment shows, child-friendly restaurants, and supervised activities for all ages.", location: "Lonavala, Maharashtra", image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=500", amenities: ["Kids Club", "Water Park", "Family Rooms", "Play Area", "Multiple Pools", "All-Inclusive"]},
            {id: 8, name: "Romantic Getaway Inn", category: "Romantic", price: 31600, description: "Perfect for couples seeking an intimate retreat. Enjoy private candlelit dinners, couple spa treatments, vineyard tours, romantic room setups, and stunning sunset views.", location: "Udaipur, Rajasthan", image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500", amenities: ["Couple Spa", "Private Dining", "Lake View", "Jacuzzi", "Romantic Setup", "Wine Tasting"]},
            {id: 9, name: "Urban Loft Hotel", category: "Urban", price: 16200, description: "Trendy industrial-chic lofts in the vibrant city center. Features exposed brick walls, modern amenities, rooftop bar with city views, and walking distance to nightlife and cultural attractions.", location: "Pune, Maharashtra", image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500", amenities: ["Rooftop Bar", "Modern Design", "City Center", "Free WiFi", "Bike Rental", "Cafe"]},
            {id: 10, name: "Historic Manor House", category: "Historic", price: 24100, description: "Step back in time in our beautifully restored Victorian mansion. Experience old-world charm with modern comforts, antique furnishings, heritage walks, and authentic colonial dining.", location: "Kolkata, West Bengal", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500", amenities: ["Heritage Property", "Antique Decor", "Library", "Garden", "Museum Tours", "Traditional Cuisine"]},
            {id: 11, name: "Wellness Spa Resort", category: "Spa", price: 35000, description: "A sanctuary for mind, body, and soul. Offering comprehensive spa treatments, yoga and meditation sessions, ayurvedic therapies, organic dining, and tranquil natural surroundings.", location: "Kerala", image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=500", amenities: ["Full Spa", "Yoga Studio", "Ayurveda", "Meditation", "Organic Food", "Wellness Programs"]},
            {id: 12, name: "Golf Club Resort", category: "Golf", price: 28300, description: "Premier golf destination featuring an 18-hole championship course, professional golf instruction, practice facilities, luxury clubhouse, and elegant accommodations overlooking the greens.", location: "Greater Noida, UP", image: "https://images.unsplash.com/photo-1517840901100-8179e982acb7?w=500", amenities: ["Golf Course", "Golf Lessons", "Clubhouse", "Pro Shop", "Restaurant", "Pool"]},
            {id: 13, name: "Ski Lodge Paradise", category: "Ski", price: 32900, description: "Ultimate winter wonderland with ski-in/ski-out access, equipment rentals, ski school, cozy fireplaces, hot tubs, and stunning snow-covered mountain views from every room.", location: "Gulmarg, Kashmir", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500", amenities: ["Ski Access", "Equipment Rental", "Ski School", "Hot Tub", "Fireplace", "Mountain View"]},
            {id: 14, name: "Luxury Riverfront Hotel", category: "Riverfront", price: 22900, description: "Elegant riverfront property with spectacular views of the holy river. Features traditional architecture, rooftop yoga at sunrise, riverside dining, and spiritual experiences.", location: "Rishikesh, Uttarakhand", image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=500", amenities: ["River View", "Yoga Classes", "Spa", "Riverside Cafe", "Adventure Sports", "Free WiFi"]},
            {id: 15, name: "Eco Green Lodge", category: "Eco-Friendly", price: 20000, description: "Sustainable eco-lodge committed to environmental conservation. Solar-powered, organic farm-to-table dining, nature trails, bird watching, and minimal environmental footprint.", location: "Coorg, Karnataka", image: "https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?w=500", amenities: ["Eco-Friendly", "Organic Food", "Nature Trails", "Solar Power", "Bird Watching", "Farm Tours"]},
            {id: 16, name: "Airport Express Hotel", category: "Airport", price: 10400, description: "Ultimate convenience for travelers with 24-hour shuttle service, quick check-in/out, comfortable soundproof rooms, and all amenities needed for a restful stopover.", location: "Hyderabad, Telangana", image: "https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?w=500", amenities: ["Airport Shuttle", "24/7 Service", "Quick Check-in", "Free WiFi", "Restaurant", "Soundproof Rooms"]},
            {id: 17, name: "Marina Bay Hotel", category: "Waterfront", price: 25800, description: "Stunning waterfront hotel with private marina access, yacht charters, seafood restaurant, sunset cruises, and luxurious rooms with floor-to-ceiling windows overlooking the harbor.", location: "Chennai, Tamil Nadu", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500", amenities: ["Marina Access", "Yacht Charter", "Seafood Restaurant", "Pool", "Sunset Cruises", "Free WiFi"]},
            {id: 18, name: "Country Farmhouse Inn", category: "Countryside", price: 13300, description: "Peaceful countryside retreat on a working farm. Experience rural life, farm-fresh meals, horseback riding, organic gardens, and authentic village hospitality.", location: "Punjab", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500", amenities: ["Farm Experience", "Organic Food", "Horse Riding", "Village Tours", "Garden", "Bonfire"]},
            {id: 19, name: "Modern Art Hotel", category: "Design", price: 21600, description: "A masterpiece of contemporary design featuring rotating art exhibitions, avant-garde architecture, designer furniture, and a gallery showcasing local and international artists.", location: "Ahmedabad, Gujarat", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500", amenities: ["Art Gallery", "Modern Design", "Rooftop Bar", "Free WiFi", "Designer Rooms", "Art Workshops"]},
            {id: 20, name: "Tropical Paradise Resort", category: "Tropical", price: 31600, description: "Exotic tropical escape with palm-fringed beaches, crystal-clear lagoons, overwater bungalows, island hopping tours, and authentic island cuisine.", location: "Andaman & Nicobar", image: "https://images.unsplash.com/photo-1559508551-44bff1de756b?w=500", amenities: ["Beach Access", "Water Bungalows", "Scuba Diving", "Island Tours", "Spa", "Seafood Restaurant"]},
            {id: 21, name: "Desert Oasis Hotel", category: "Desert", price: 17500, description: "Unique desert experience with camel safaris, traditional cultural performances, stargazing nights, dune bashing, and authentic Rajasthani hospitality in luxury tents.", location: "Jaisalmer, Rajasthan", image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500", amenities: ["Camel Safari", "Cultural Shows", "Desert Camping", "Stargazing", "Traditional Cuisine", "Bonfire"]},
            {id: 22, name: "Pet-Friendly Inn", category: "Pet-Friendly", price: 12100, description: "Your furry friends are family here! Pet-friendly rooms, dog park, grooming services, pet menu, and nearby walking trails. Special amenities for your pets included.", location: "Lonavala, Maharashtra", image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=500", amenities: ["Pet Welcome", "Dog Park", "Pet Menu", "Grooming", "Walking Trails", "Pet Sitting"]},
            {id: 23, name: "Conference Center Hotel", category: "Conference", price: 19100, description: "State-of-the-art conference and event facilities with high-tech AV equipment, multiple meeting rooms, business lounges, professional catering, and comfortable executive accommodations.", location: "Gurugram, Haryana", image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=500", amenities: ["Conference Rooms", "AV Equipment", "Business Lounge", "Catering", "High-Speed WiFi", "Parking"]},
            {id: 24, name: "Vineyard Estate Hotel", category: "Vineyard", price: 30400, description: "Stay among lush vineyards with wine tasting tours, grape harvesting experiences, gourmet dining paired with local wines, and scenic countryside views.", location: "Nashik, Maharashtra", image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500", amenities: ["Wine Tasting", "Vineyard Tours", "Gourmet Restaurant", "Spa", "Pool", "Cycling"]},
            {id: 25, name: "Island Retreat Resort", category: "Island", price: 36600, description: "Exclusive private island experience with overwater villas, snorkeling, diving, private beaches, island cuisine, and unparalleled tropical luxury.", location: "Lakshadweep", image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500", amenities: ["Private Island", "Water Villas", "Diving", "Snorkeling", "Private Beach", "All-Inclusive"]},
            {id: 26, name: "Rustic Cabin Lodge", category: "Cabin", price: 14500, description: "Authentic wooden cabins nestled in dense forests. Experience wildlife, nature walks, campfire stories, fishing, and a digital detox in serene wilderness.", location: "Jim Corbett, Uttarakhand", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500", amenities: ["Forest View", "Nature Walks", "Campfire", "Fishing", "Wildlife Tours", "Organic Food"]},
            {id: 27, name: "Penthouse Suites Hotel", category: "Luxury", price: 40000, description: "Ultra-luxurious penthouse suites with panoramic city views, private terraces, personal butler service, infinity pools, and exclusive access to VIP amenities.", location: "Mumbai, Maharashtra", image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=500", amenities: ["Penthouse Suites", "Butler Service", "Private Pool", "City View", "Fine Dining", "Spa"]},
            {id: 28, name: "Adventure Base Camp", category: "Adventure", price: 15800, description: "Headquarters for adventure enthusiasts! Rock climbing, river rafting, zip-lining, trekking packages, and experienced guides for all your adrenaline-pumping activities.", location: "Rishikesh, Uttarakhand", image: "https://images.unsplash.com/photo-1517840901100-8179e982acb7?w=500", amenities: ["Adventure Sports", "Rafting", "Trekking", "Rock Climbing", "Camping", "Guides"]},
            {id: 29, name: "Lakeside Inn", category: "Lake", price: 17100, description: "Tranquil lakefront property perfect for relaxation. Enjoy boating, fishing, lakeside dining, sunset views, and peaceful water-facing rooms.", location: "Nainital, Uttarakhand", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500", amenities: ["Lake View", "Boating", "Fishing", "Lakeside Restaurant", "Free WiFi", "Garden"]},
            {id: 30, name: "Glamping Resort", category: "Glamping", price: 22100, description: "Luxury camping experience with safari-style tents featuring king beds, en-suite bathrooms, gourmet dining, and all the comforts of a hotel in the heart of nature.", location: "Ranthambore, Rajasthan", image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=500", amenities: ["Luxury Tents", "En-suite Bath", "Wildlife Safari", "Gourmet Dining", "Bonfire", "Nature Walks"]}
        ];

        let currentCategory = "All";
        let maxPrice = 41500;
        let currentUser = null;

        function checkUser() {
            const user = localStorage.getItem('tripnext_user');
            if (user) {
                currentUser = JSON.parse(user);
                updateAuthButtons();
            }
        }

        function updateAuthButtons() {
            const authButtons = document.getElementById('authButtons');
            if (currentUser) {
                authButtons.innerHTML = `
                    <button class="user-name-btn">👤 ${currentUser.name}</button>
                `;
            } else {
                authButtons.innerHTML = `
                    <button class="login-btn" onclick="goToLogin()">Login</button>
                    <button class="signup-btn" onclick="goToSignup()">Sign Up</button>
                `;
            }
        }

        function goToHome() {
            window.location.hash = '';
            renderHomePage();
        }

        function goToLogin() {
            window.location.hash = 'login';
            renderLoginPage();
        }

        function goToSignup() {
            window.location.hash = 'signup';
            renderSignupPage();
        }

        function goToHotelDetails(hotelId) {
            window.location.hash = `hotel-${hotelId}`;
            renderHotelDetails(hotelId);
        }

        function showSuccess(message) {
            const successDiv = document.createElement('div');
            successDiv.className = 'success-message';
            successDiv.textContent = message;
            document.body.appendChild(successDiv);
            setTimeout(() => {
                successDiv.remove();
            }, 3000);
        }

        function renderHomePage() {
            const content = `
                <div class="container">
                    <div class="search-section">
                        <div class="search-box">
                            <input type="text" class="search-input" id="searchInput" placeholder="Search hotels by name or location..." onkeyup="handleSearch()">
                            <button class="search-btn" onclick="searchHotels()">Search</button>
                        </div>
                    </div>

                    <div class="category-section">
                        <h2 class="category-title">Browse by Category</h2>
                        <div class="category-scroll">
                            <div class="categories" id="categories"></div>
                        </div>
                    </div>

                    <div class="filter-section">
                        <div class="price-filter">
                            <label>Price Range:</label>
                            <div class="price-slider">
                                <input type="range" id="priceRange" min="4150" max="41500" value="41500" oninput="updatePrice()">
                            </div>
                            <span class="price-value">₹<span id="priceValue">41,500</span></span>
                        </div>
                    </div>

                    <div class="hotels-grid" id="hotelsGrid"></div>
                </div>
            `;
            document.getElementById('mainContent').innerHTML = content;
            renderCategories();
            renderHotels();
        }

        function renderLoginPage() {
            const content = `
                <div class="auth-page">
                    <div class="auth-container">
                        <h1 class="auth-title">Welcome Back!</h1>
                        <p class="auth-subtitle">Login to continue your journey</p>
                        <form onsubmit="handleLogin(event)">
                            <div class="form-group">
                                <label>Email</label>
                                <input type="email" id="loginEmail" required>
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <input type="password" id="loginPassword" required>
                            </div>
                            <button type="submit" class="submit-btn">Login</button>
                        </form>
                        <p class="auth-switch">Don't have an account? <a href="#signup" onclick="goToSignup()">Sign Up</a></p>
                    </div>
                </div>
            `;
            document.getElementById('mainContent').innerHTML = content;
        }

        function renderSignupPage() {
            const content = `
                <div class="auth-page">
                    <div class="auth-container">
                        <h1 class="auth-title">Join TripNext</h1>
                        <p class="auth-subtitle">Start your adventure today</p>
                        <form onsubmit="handleSignup(event)">
                            <div class="form-group">
                                <label>Full Name</label>
                                <input type="text" id="signupName" required>
                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                <input type="email" id="signupEmail" required>
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <input type="password" id="signupPassword" required>
                            </div>
                            <button type="submit" class="submit-btn">Sign Up</button>
                        </form>
                        <p class="auth-switch">Already have an account? <a href="#login" onclick="goToLogin()">Login</a></p>
                    </div>
                </div>
            `;
            document.getElementById('mainContent').innerHTML = content;
        }

        function renderHotelDetails(hotelId) {
            const hotel = hotels.find(h => h.id === parseInt(hotelId));
            if (!hotel) {
                goToHome();
                return;
            }

            const content = `
                <div class="container">
                    <div class="hotel-details">
                        <button class="back-btn" onclick="goToHome()">← Back to Hotels</button>
                        <img src="${hotel.image}" alt="${hotel.name}" class="detail-image">
                        <div class="detail-header">
                            <div>
                                <h1 class="detail-title">${hotel.name}</h1>
                                <p class="detail-location">📍 ${hotel.location}</p>
                                <span class="detail-category">${hotel.category}</span>
                            </div>
                            <div class="detail-price-section">
                                <div class="detail-price">₹${hotel.price.toLocaleString('en-IN')}</div>
                                <div style="color: #64748b; margin-top: 0.5rem;">per night</div>
                            </div>
                        </div>
                        <p class="detail-description">${hotel.description}</p>
                        <div class="amenities-section">
                            <h2 class="amenities-title">Amenities</h2>
                            <div class="amenities-grid">
                                ${hotel.amenities.map(amenity => `
                                    <div class="amenity-item">✓ ${amenity}</div>
                                `).join('')}
                            </div>
                        </div>
                        <button class="book-now-btn" onclick="bookHotel('${hotel.name}', ${hotel.id})">Book Now</button>
                    </div>
                </div>
            `;
            document.getElementById('mainContent').innerHTML = content;
        }

        function handleLogin(e) {
            e.preventDefault();
            const name = document.getElementById('loginEmail').value.split('@')[0];
            const user = { name: name.charAt(0).toUpperCase() + name.slice(1) };
            localStorage.setItem('tripnext_user', JSON.stringify(user));
            currentUser = user;
            showSuccess('Login successful! Welcome back to TripNext!');
            updateAuthButtons();
            setTimeout(() => goToHome(), 1000);
        }

        function handleSignup(e) {
            e.preventDefault();
            const name = document.getElementById('signupName').value;
            const user = { name: name };
            localStorage.setItem('tripnext_user', JSON.stringify(user));
            currentUser = user;
            showSuccess('Account created successfully! Welcome to TripNext!');
            updateAuthButtons();
            setTimeout(() => goToHome(), 1000);
        }

        function renderCategories() {
            const categories = ["All", ...new Set(hotels.map(h => h.category))];
            const container = document.getElementById('categories');
            if (!container) return;
            container.innerHTML = categories.map(cat => 
                `<button class="category-btn ${cat === currentCategory ? 'active' : ''}" onclick="filterByCategory('${cat}')">${cat}</button>`
            ).join('');
        }

        function filterByCategory(category) {
            currentCategory = category;
            renderCategories();
            renderHotels();
        }

        function updatePrice() {
            maxPrice = document.getElementById('priceRange').value;
            document.getElementById('priceValue').textContent = parseInt(maxPrice).toLocaleString('en-IN');
            renderHotels();
        }

        function searchHotels() {
            renderHotels();
        }

        function handleSearch() {
            renderHotels();
        }

        function renderHotels() {
            const searchInput = document.getElementById('searchInput');
            const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
            const filtered = hotels.filter(h => {
                const matchCategory = currentCategory === "All" || h.category === currentCategory;
                const matchPrice = h.price <= maxPrice;
                const matchSearch = h.name.toLowerCase().includes(searchTerm) || 
                                   h.location.toLowerCase().includes(searchTerm) ||
                                   h.description.toLowerCase().includes(searchTerm);
                return matchCategory && matchPrice && matchSearch;
            });

            const container = document.getElementById('hotelsGrid');
            if (!container) return;
            
            if (filtered.length === 0) {
                container.innerHTML = '<div class="no-results">No hotels found. Try adjusting your filters!</div>';
                return;
            }

            container.innerHTML = filtered.map(hotel => `
                <div class="hotel-card" onclick="goToHotelDetails(${hotel.id})">
                    <img src="${hotel.image}" alt="${hotel.name}" class="hotel-image">
                    <div class="hotel-content">
                        <h3 class="hotel-name">${hotel.name}</h3>
                        <span class="hotel-category">${hotel.category}</span>
                        <p class="hotel-description">${hotel.description.substring(0, 100)}...</p>
                        <div class="hotel-footer">
                            <div class="hotel-price">₹${hotel.price.toLocaleString('en-IN')}<span style="font-size:0.8rem;color:#64748b">/night</span></div>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        function bookHotel(name, id) {
            if (!currentUser) {
                showSuccess('Please login to book hotels!');
                setTimeout(() => goToLogin(), 1500);
                return;
            }
            showSuccess(`Hotel Booked! ${name} has been successfully reserved.`);
            setTimeout(() => goToHome(), 2000);
        }

        window.addEventListener('hashchange', function() {
            const hash = window.location.hash.substring(1);
            if (hash === 'login') {
                renderLoginPage();
            } else if (hash === 'signup') {
                renderSignupPage();
            } else if (hash.startsWith('hotel-')) {
                const hotelId = hash.split('-')[1];
                renderHotelDetails(hotelId);
            } else {
                renderHomePage();
            }
        });

        checkUser();
        const hash = window.location.hash.substring(1);
        if (hash === 'login') {
            renderLoginPage();
        } else if (hash === 'signup') {
            renderSignupPage();
        } else if (hash.startsWith('hotel-')) {
            const hotelId = hash.split('-')[1];
            renderHotelDetails(hotelId);
        } else {
            renderHomePage();
        }
