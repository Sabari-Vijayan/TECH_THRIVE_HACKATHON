// Main JavaScript file for CampusCompass application

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    initApp();
});

function initApp() {
    // Set up event listeners
    setupEventListeners();
    
    // For demo purposes - simulate loading a map
    simulateMapLoading();
}

function setupEventListeners() {
    // Filter chips
    const filterChips = document.querySelectorAll('.filter-chip');
    filterChips.forEach(chip => {
        chip.addEventListener('click', function() {
            // Clear active class from all chips
            filterChips.forEach(c => c.classList.remove('active'));
            // Add active class to clicked chip
            this.classList.add('active');
            
            // Filter resources based on selection
            filterResources(this.textContent);
        });
    });
    
    // Floor buttons
    const floorButtons = document.querySelectorAll('.floor-btn');
    floorButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Clear active class from all floor buttons
            floorButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Change floor in the map
            changeFloor(this.textContent);
        });
    });
    
    // Map control buttons
    const mapControls = document.querySelectorAll('.map-control-btn');
    mapControls.forEach(control => {
        control.addEventListener('click', function() {
            // Handle map controls (zoom in, zoom out, etc.)
            handleMapControl(this.textContent);
        });
    });
    
    // Layer checkboxes
    const layerOptions = document.querySelectorAll('.layer-option input');
    layerOptions.forEach(option => {
        option.addEventListener('change', function() {
            // Toggle layer visibility
            toggleLayer(this.id, this.checked);
        });
    });
    
    // Search functionality
    const searchButton = document.querySelector('.search-btn');
    const searchInput = document.querySelector('.search-input');
    
    searchButton.addEventListener('click', function() {
        performSearch(searchInput.value);
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch(this.value);
        }
    });
    
    // Resource cards
    const resourceCards = document.querySelectorAll('.resource-card');
    resourceCards.forEach(card => {
        card.addEventListener('click', function() {
            // Show details or navigate to the resource
            showResourceDetails(this);
        });
    });
}

// Placeholder functions for future implementation

function simulateMapLoading() {
    console.log('Map loading simulation started');
    const mapPlaceholder = document.querySelector('.map-placeholder');
    
    // This would be replaced with actual map loading code
    setTimeout(() => {
        mapPlaceholder.innerHTML = 'Map Loaded Successfully';
    }, 1000);
}

function filterResources(filterType) {
    console.log(`Filtering resources by: ${filterType}`);
    // Implementation would filter the displayed resources
}

function changeFloor(floor) {
    console.log(`Changing to floor: ${floor}`);
    // Implementation would change the displayed floor
}

function handleMapControl(controlType) {
    console.log(`Map control activated: ${controlType}`);
    // Implementation would handle map controls
}

function toggleLayer(layerId, isVisible) {
    console.log(`Toggling layer ${layerId}: ${isVisible ? 'visible' : 'hidden'}`);
    // Implementation would show/hide map layers
}

function performSearch(query) {
    console.log(`Searching for: ${query}`);
    // Implementation would search for resources
    
    if (!query) {
        alert('Please enter a search term');
        return;
    }
    
    // For demo purposes - show searching feedback
    const resourceGrid = document.querySelector('.resource-grid');
    resourceGrid.innerHTML = '<div class="searching">Searching...</div>';
    
    // Simulate search delay
    setTimeout(() => {
        // This would be replaced with actual search results
        resourceGrid.innerHTML = '<div class="resource-card"><div class="resource-image">Search Result</div><div class="resource-details"><div class="resource-title">Search Result for: ' + query + '</div><div>Found in Building X</div><div>100m away</div><div class="resource-status status-available">Available</div></div></div>';
    }, 1000);
}

function showResourceDetails(resourceCard) {
    const resourceName = resourceCard.querySelector('.resource-title').textContent;
    console.log(`Showing details for: ${resourceName}`);
    // Implementation would show detailed information about the resource
    
    // For demo purposes - simple alert
    alert(`You selected: ${resourceName}`);
}

// Space for future feature implementations

// Geolocation functionality
function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                const userCoords = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                console.log('User location:', userCoords);
                // Implementation would center map on user location
            },
            error => {
                console.error('Error getting location:', error.message);
            }
        );
    } else {
        console.error('Geolocation is not supported by this browser');
    }
}

// People finder functionality - for future implementation
function findPerson(personName) {
    console.log(`Searching for person: ${personName}`);
    // Implementation would search for a specific person
}

// Resource availability checking - for future implementation
function checkResourceAvailability(resourceId) {
    console.log(`Checking availability for resource: ${resourceId}`);
    // Implementation would check real-time availability
}
