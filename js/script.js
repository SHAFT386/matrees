// =============================================================
// script.js - Complete with all page functionality
// Updated for Top-Notch Mattresses & Beddings
// =============================================================

var SESSION_CART_KEY = 'topnotch_session_cart';

// Use the single products array from product.js
// products is already defined in product.js

// ========== CART FUNCTIONS ==========
function getCart() {
    var cart = sessionStorage.getItem(SESSION_CART_KEY);
    return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
    sessionStorage.setItem(SESSION_CART_KEY, JSON.stringify(cart));
    updateCartCount();
}

function addToCart(productId, quantity) {
    var finalQty = typeof quantity === 'function' ? quantity() : (quantity || 1);
    if (finalQty < 1) finalQty = 1;
    var cart = getCart();
    var product = products.find(function(p) { return p.id == productId; });
    if (!product) return;
    var existing = cart.find(function(item) { return item.id == productId; });
    if (existing) {
        existing.quantity += finalQty;
    } else {
        cart.push({ id: productId, name: product.name, price: product.price, image: product.images[0], quantity: finalQty });
    }
    saveCart(cart);
    updateFabCart();
}

function removeFromCart(productId) {
    var cart = getCart();
    cart = cart.filter(function(item) { return item.id != productId; });
    saveCart(cart);
    updateFabCart();
}

function updateCartItem(productId, quantity) {
    if (quantity < 1) quantity = 1;
    var cart = getCart();
    var item = cart.find(function(i) { return i.id == productId; });
    if (item) { item.quantity = quantity; saveCart(cart); updateFabCart(); }
}

function updateCartCount() {
    var cart = getCart();
    var total = cart.reduce(function(t, i) { return t + i.quantity; }, 0);
    document.querySelectorAll('#cart-count, #cart-count-nav, .fab-cart-count').forEach(function(el) { if(el) el.textContent = total; });
}

function updateCartSummary() {
    var cart = getCart();
    var subtotal = cart.reduce(function(t, i) { return t + (i.price * i.quantity); }, 0);
    var subtotalEl = document.querySelector('#subtotal');
    var totalEl = document.querySelector('#total');
    if (subtotalEl) subtotalEl.textContent = 'UGX ' + subtotal.toLocaleString();
    if (totalEl) totalEl.textContent = 'UGX ' + subtotal.toLocaleString();
}

// ========== SEARCH FUNCTIONS ==========
function doSearch() {
    var searchInput = document.getElementById('searchInput');
    var query = searchInput ? searchInput.value.trim() : '';
    if (query.length >= 2 || query === '') {
        window.location.href = 'search.html?q=' + encodeURIComponent(query);
    } else if (query.length > 0 && query.length < 2) {
        showNotification('Please enter at least 2 characters');
    }
}

// ========== MOBILE MENU ==========
function toggleMobileMenu() {
    var menu = document.getElementById('mobileMenu');
    var overlay = document.getElementById('overlay');
    menu.classList.toggle('open');
    overlay.classList.toggle('show');
    document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
}

function closeMobileMenu() {
    var menu = document.getElementById('mobileMenu');
    var overlay = document.getElementById('overlay');
    if (menu) menu.classList.remove('open');
    if (overlay) overlay.classList.remove('show');
    document.body.style.overflow = '';
}

// ========== NOTIFICATION ==========
function showNotification(message) {
    var notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(function() { notification.classList.add('show'); }, 10);
    setTimeout(function() {
        notification.classList.remove('show');
        setTimeout(function() { if(notification.parentNode) notification.parentNode.removeChild(notification); }, 300);
    }, 2500);
}

// ========== SHUFFLE & DISCOUNT ==========
function shuffleArray(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
    }
    return arr;
}

function calculateDiscount(price, originalPrice) {
    if (!originalPrice || originalPrice <= price) return 0;
    return Math.round(((originalPrice - price) / originalPrice) * 100);
}

// ========== LOAD CATEGORIES ==========
function loadCategories() {
    var grid = document.querySelector('#category-grid');
    if (!grid || typeof categories === 'undefined') return;
    grid.innerHTML = '';
    categories.forEach(function(cat) {
        var card = document.createElement('div');
        card.className = 'category-card';
        card.innerHTML = '<img src="category/' + cat.image + '" alt="' + cat.name + '" onerror="this.src=\'https://placehold.co/400x200/e31e24/white?text=' + encodeURIComponent(cat.name) + '\'"><div class="category-info"><h3>' + cat.name + '</h3><a href="category.html?cat=' + cat.id + '" class="view-more">Shop Now</a></div>';
        grid.appendChild(card);
    });
}

// ========== LOAD FEATURED PRODUCTS ==========
function loadFeaturedProducts() {
    var grid = document.querySelector('#featured-products');
    if (!grid) return;
    var shuffled = shuffleArray(products.slice());
    var featured = shuffled.slice(0, 12);
    grid.innerHTML = '';
    featured.forEach(function(product) {
        var discount = calculateDiscount(product.price, product.originalPrice);
        var card = document.createElement('div');
        card.className = 'product-card';
        card.dataset.id = product.id;
        card.innerHTML = '<div class="product-image"><img src="images/' + product.images[0] + '" alt="' + product.name + '" onerror="this.src=\'https://placehold.co/300x200/e31e24/white?text=' + encodeURIComponent(product.name) + '\'">' + (discount > 0 ? '<span class="discount-badge">' + discount + '% OFF</span>' : '') + '</div><div class="product-info"><h3 class="product-name">' + product.name + '</h3><div class="product-price"><span class="current-price">UGX ' + product.price.toLocaleString() + '</span>' + (product.originalPrice > product.price ? '<span class="original-price">UGX ' + product.originalPrice.toLocaleString() + '</span>' : '') + '</div><p class="product-description">' + product.description.substring(0, 50) + '...</p><button class="add-cart-btn">Add to Cart</button></div>';
        grid.appendChild(card);
        card.querySelector('.product-image').addEventListener('click', function() { window.location.href = 'product.html?id=' + product.id; });
        card.querySelector('.add-cart-btn').addEventListener('click', function(e) { e.stopPropagation(); addToCart(product.id, 1); updateCartCount(); showNotification('Added to cart!'); });
    });
}

// ========== HERO SLIDER ==========
function initHeroSlider() {
    var slides = document.querySelectorAll('#advertSlider .slide');
    if (!slides.length) return;
    var current = 0;
    var prevBtn = document.querySelector('.slider-controls .prev');
    var nextBtn = document.querySelector('.slider-controls .next');
    var dotsContainer = document.getElementById('sliderDots');
    var slideCounter = document.getElementById('slideCounter');
    var interval;
    function showSlide(n) {
        slides.forEach(function(s) { s.classList.remove('active'); });
        current = (n + slides.length) % slides.length;
        slides[current].classList.add('active');
        if (dotsContainer) {
            var dots = dotsContainer.querySelectorAll('.slider-dot');
            dots.forEach(function(dot, idx) { dot.classList.toggle('active', idx === current); });
        }
        if (slideCounter) slideCounter.textContent = (current + 1) + ' / ' + slides.length;
    }
    function startInterval() { if (interval) clearInterval(interval); interval = setInterval(function() { showSlide(current + 1); }, 5000); }
    if (dotsContainer) {
        dotsContainer.innerHTML = '';
        for (var i = 0; i < slides.length; i++) {
            var dot = document.createElement('button');
            dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
            dot.addEventListener('click', (function(idx) { return function() { showSlide(idx); startInterval(); }; })(i));
            dotsContainer.appendChild(dot);
        }
    }
    if (prevBtn) prevBtn.addEventListener('click', function() { showSlide(current - 1); startInterval(); });
    if (nextBtn) nextBtn.addEventListener('click', function() { showSlide(current + 1); startInterval(); });
    startInterval();
}

// ========== FAB SETUP ==========
function setupFAB() {
    var container = document.querySelector('.fab-container');
    if (!container) return;
    var fabCart = document.querySelector('.fab-cart');
    var fabWhatsapp = document.querySelector('.fab-whatsapp');
    var fabCall = document.querySelector('.fab-call');
    var fabClose = document.querySelector('.fab-cart-close');
    if (fabCart) fabCart.addEventListener('click', function() { container.classList.toggle('cart-active'); updateFabCart(); });
    if (fabWhatsapp) fabWhatsapp.addEventListener('click', function() { window.open('https://wa.me/256758647456', '_blank'); });
    if (fabCall) fabCall.addEventListener('click', function() { window.location.href = 'tel:+256758647456'; });
    if (fabClose) fabClose.addEventListener('click', function() { container.classList.remove('cart-active'); });
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.fab-cart-container') && !e.target.closest('.fab-cart') && container.classList.contains('cart-active')) {
            container.classList.remove('cart-active');
        }
    });
}

function updateFabCart() {
    var cart = getCart();
    var itemsContainer = document.querySelector('.fab-cart-items');
    var totalSpan = document.querySelector('#fab-cart-total');
    if (!itemsContainer) return;
    if (cart.length === 0) {
        itemsContainer.innerHTML = '<div class="empty-fab-cart">Your cart is empty</div>';
        if (totalSpan) totalSpan.textContent = 'UGX 0';
        return;
    }
    var html = '', total = 0;
    cart.forEach(function(item) {
        total += item.price * item.quantity;
        html += '<div class="fab-cart-item"><div class="fab-cart-item-image"><img src="images/' + item.image + '" alt="' + item.name + '"></div><div class="fab-cart-item-details"><div class="fab-cart-item-name">' + item.name + '</div><div class="fab-cart-item-price">' + item.quantity + ' x UGX ' + item.price.toLocaleString() + '</div></div></div>';
    });
    itemsContainer.innerHTML = html;
    if (totalSpan) totalSpan.textContent = 'UGX ' + total.toLocaleString();
}

// ========== CART PAGE ==========
function loadCartItems() {
    var container = document.querySelector('#cart-items');
    if (!container) return;
    var cart = getCart();
    if (cart.length === 0) {
        container.innerHTML = '<div class="empty-cart"><i class="fas fa-shopping-cart"></i><p>Your cart is empty</p><a href="index.html" class="continue-shopping" style="display: inline-block; background: var(--primary); color: white; padding: 10px 25px; border-radius: 30px; text-decoration: none; margin-top: 15px;">Continue Shopping</a></div>';
        updateCartSummary();
        return;
    }
    container.innerHTML = '';
    cart.forEach(function(item) {
        var cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.dataset.id = item.id;
        cartItem.innerHTML = '<div class="cart-item-image"><img src="images/' + item.image + '" alt="' + item.name + '"></div><div class="cart-item-details"><h3 class="cart-item-name">' + item.name + '</h3><div class="cart-item-price">UGX ' + item.price.toLocaleString() + '</div><div class="cart-item-actions"><div class="quantity-control"><button class="decrease">-</button><input type="number" value="' + item.quantity + '" min="1"><button class="increase">+</button></div><div class="remove-item"><i class="fas fa-trash"></i> Remove</div></div></div>';
        container.appendChild(cartItem);
        
        var input = cartItem.querySelector('input');
        var decrease = cartItem.querySelector('.decrease');
        var increase = cartItem.querySelector('.increase');
        var remove = cartItem.querySelector('.remove-item');
        
        if (decrease) decrease.addEventListener('click', function() { if (parseInt(input.value) > 1) { input.value = parseInt(input.value) - 1; updateCartItem(item.id, parseInt(input.value)); updateCartSummary(); updateCartCount(); updateFabCart(); } });
        if (increase) increase.addEventListener('click', function() { input.value = parseInt(input.value) + 1; updateCartItem(item.id, parseInt(input.value)); updateCartSummary(); updateCartCount(); updateFabCart(); });
        if (input) input.addEventListener('change', function() { if (parseInt(input.value) < 1) input.value = 1; updateCartItem(item.id, parseInt(input.value)); updateCartSummary(); updateCartCount(); updateFabCart(); });
        if (remove) remove.addEventListener('click', function() { removeFromCart(item.id); loadCartItems(); updateCartSummary(); updateCartCount(); updateFabCart(); showNotification('Item removed'); });
    });
    updateCartSummary();
}

function proceedToCheckout() {
    var cart = getCart();
    if (cart.length === 0) { showNotification('Your cart is empty!'); return; }
    var message = 'Hello Top-Notch Mattresses! I would like to order:\n\n';
    cart.forEach(function(item) { message += '- ' + item.name + ' (' + item.quantity + ' x UGX ' + item.price.toLocaleString() + ')\n'; });
    var subtotal = cart.reduce(function(t, i) { return t + (i.price * i.quantity); }, 0);
    message += '\nSubtotal: UGX ' + subtotal.toLocaleString() + '\n\nThank you!';
    sessionStorage.removeItem(SESSION_CART_KEY);
    updateCartCount();
    showNotification('Order placed! Redirecting to WhatsApp...');
    setTimeout(function() { window.open('https://wa.me/256758647456?text=' + encodeURIComponent(message), '_blank'); }, 1000);
    setTimeout(function() { if (document.querySelector('#cart-items')) loadCartItems(); }, 500);
}

// ========== PRODUCT PAGE ==========
function setupProductGallery() {
    var params = new URLSearchParams(window.location.search);
    var productId = params.get('id');
    if (!productId) { window.location.href = 'index.html'; return; }
    var product = products.find(function(p) { return p.id == productId; });
    if (!product) { window.location.href = 'index.html'; return; }
    
    document.querySelector('#product-name').textContent = product.name;
    document.querySelector('#current-price').textContent = 'UGX ' + product.price.toLocaleString();
    if (product.originalPrice > product.price) {
        document.querySelector('#original-price').textContent = 'UGX ' + product.originalPrice.toLocaleString();
        document.querySelector('#discount').textContent = calculateDiscount(product.price, product.originalPrice) + '% OFF';
    }
    document.querySelector('#product-description').innerHTML = '<p>' + product.description + '</p>';
    
    var specsContainer = document.querySelector('#product-specs');
    if (specsContainer && product.specifications && product.specifications.length > 0) {
        specsContainer.innerHTML = '';
        product.specifications.forEach(function(spec) {
            var specItem = document.createElement('div');
            specItem.className = 'spec-item';
            specItem.innerHTML = '<strong>' + spec.name + ':</strong> ' + spec.value;
            specsContainer.appendChild(specItem);
        });
    }
    
    var gallery = document.querySelector('#product-gallery');
    if (gallery) {
        gallery.innerHTML = '<div class="main-image"><img src="images/' + product.images[0] + '" alt="' + product.name + '" onerror="this.src=\'https://placehold.co/400x400/e31e24/white?text=' + encodeURIComponent(product.name) + '\'"></div><div class="thumbnail-container"></div>';
        var thumbsContainer = gallery.querySelector('.thumbnail-container');
        product.images.forEach(function(img, idx) {
            var thumb = document.createElement('div');
            thumb.className = 'thumbnail' + (idx === 0 ? ' active' : '');
            thumb.innerHTML = '<img src="images/' + img + '" alt="' + product.name + '">';
            thumb.addEventListener('click', function() {
                gallery.querySelector('.main-image img').src = 'images/' + img;
                document.querySelectorAll('.thumbnail').forEach(function(t) { t.classList.remove('active'); });
                thumb.classList.add('active');
            });
            thumbsContainer.appendChild(thumb);
        });
    }
    
    var addBtn = document.querySelector('.add-to-cart');
    var qtyInput = document.querySelector('#quantity');
    if (addBtn && qtyInput) {
        addBtn.addEventListener('click', function() { addToCart(product.id, parseInt(qtyInput.value) || 1); updateCartCount(); showNotification('Added to cart!'); });
        var decreaseBtn = document.querySelector('.decrease');
        var increaseBtn = document.querySelector('.increase');
        if (decreaseBtn) decreaseBtn.addEventListener('click', function() { if (parseInt(qtyInput.value) > 1) qtyInput.value = parseInt(qtyInput.value) - 1; });
        if (increaseBtn) increaseBtn.addEventListener('click', function() { qtyInput.value = parseInt(qtyInput.value) + 1; });
    }
    
    // Load related products
    var relatedGrid = document.querySelector('#related-products');
    if (relatedGrid) {
        var related = products.filter(function(p) { return p.category === product.category && p.id !== product.id; }).slice(0, 4);
        relatedGrid.innerHTML = '';
        related.forEach(function(rel) {
            var discount = calculateDiscount(rel.price, rel.originalPrice);
            var card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = '<div class="product-image"><img src="images/' + rel.images[0] + '" alt="' + rel.name + '">' + (discount > 0 ? '<span class="discount-badge">' + discount + '% OFF</span>' : '') + '</div><div class="product-info"><h3 class="product-name">' + rel.name + '</h3><div class="product-price"><span class="current-price">UGX ' + rel.price.toLocaleString() + '</span></div><button class="add-cart-btn">View Product</button></div>';
            relatedGrid.appendChild(card);
            card.addEventListener('click', function() { window.location.href = 'product.html?id=' + rel.id; });
        });
    }
}

// ========== CATEGORY PAGE ==========
function loadCategoryProducts() {
    var params = new URLSearchParams(window.location.search);
    var catId = params.get('cat');
    if (!catId) { window.location.href = 'index.html'; return; }
    var categoryMap = { mattresses: 'Mattresses', bedsheets: 'Bedsheets', duvets: 'Duvets & Bedcovers' };
    var titleEl = document.querySelector('#category-title');
    var breadcrumbEl = document.querySelector('#breadcrumb-category');
    var descEl = document.querySelector('#category-description');
    if (titleEl) titleEl.textContent = categoryMap[catId] || catId;
    if (breadcrumbEl) breadcrumbEl.textContent = categoryMap[catId] || catId;
    if (descEl) {
        var descriptions = {
            mattresses: 'Browse our premium collection of comfortable and durable mattresses',
            bedsheets: 'Shop our soft, breathable, and stylish bedsheets in various sizes and colors',
            duvets: 'Find the perfect duvet and bedcover to add warmth and elegance to your bedroom'
        };
        descEl.textContent = descriptions[catId] || 'Browse our premium selection';
    }
    
    var catProducts = products.filter(function(p) { return p.category === catId; });
    var grid = document.querySelector('#category-product-grid');
    if (!grid) return;
    grid.innerHTML = '';
    
    if (catProducts.length === 0) {
        grid.innerHTML = '<div class="no-products"><i class="fas fa-bed" style="font-size: 50px; margin-bottom: 20px; color: var(--gray-400);"></i><h3>No products found in this category</h3><p>Check back soon for new arrivals!</p></div>';
        return;
    }
    
    catProducts.forEach(function(product) {
        var discount = calculateDiscount(product.price, product.originalPrice);
        var card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = '<div class="product-image"><img src="images/' + product.images[0] + '" alt="' + product.name + '" onerror="this.src=\'https://placehold.co/300x200/e31e24/white?text=' + encodeURIComponent(product.name) + '\'">' + (discount > 0 ? '<span class="discount-badge">' + discount + '% OFF</span>' : '') + '</div><div class="product-info"><h3 class="product-name">' + product.name + '</h3><div class="product-price"><span class="current-price">UGX ' + product.price.toLocaleString() + '</span>' + (product.originalPrice > product.price ? '<span class="original-price">UGX ' + product.originalPrice.toLocaleString() + '</span>' : '') + '</div><p class="product-description">' + product.description.substring(0, 60) + '...</p><button class="add-cart-btn">Add to Cart</button></div>';
        grid.appendChild(card);
        card.querySelector('.product-image').addEventListener('click', function() { window.location.href = 'product.html?id=' + product.id; });
        card.querySelector('.add-cart-btn').addEventListener('click', function(e) { e.stopPropagation(); addToCart(product.id, 1); updateCartCount(); showNotification('Added to cart!'); });
    });
}

// ========== SEARCH PAGE ==========
function loadSearchResults() {
    var params = new URLSearchParams(window.location.search);
    var query = params.get('q') || '';
    var grid = document.querySelector('#search-product-grid');
    var loading = document.querySelector('#search-loading');
    var noResults = document.querySelector('#no-results');
    var queryDisplay = document.querySelector('#query-display');
    if (queryDisplay) queryDisplay.textContent = query || 'all products';
    if (!grid) return;
    if (loading) loading.style.display = 'block';
    setTimeout(function() {
        var results = [];
        if (query && query.length >= 2) {
            var lowerQuery = query.toLowerCase();
            results = products.filter(function(p) {
                return p.name.toLowerCase().includes(lowerQuery) || p.description.toLowerCase().includes(lowerQuery) || p.category.toLowerCase().includes(lowerQuery);
            });
        } else {
            results = shuffleArray(products.slice()).slice(0, 40);
        }
        if (loading) loading.style.display = 'none';
        if (results.length === 0) {
            if (grid) grid.style.display = 'none';
            if (noResults) noResults.style.display = 'block';
            return;
        }
        if (grid) grid.style.display = 'grid';
        if (noResults) noResults.style.display = 'none';
        grid.innerHTML = '';
        results.forEach(function(product) {
            var discount = calculateDiscount(product.price, product.originalPrice);
            var card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = '<div class="product-image"><img src="images/' + product.images[0] + '" alt="' + product.name + '" onerror="this.src=\'https://placehold.co/300x200/e31e24/white?text=' + encodeURIComponent(product.name) + '\'">' + (discount > 0 ? '<span class="discount-badge">' + discount + '% OFF</span>' : '') + '</div><div class="product-info"><h3 class="product-name">' + product.name + '</h3><div class="product-price"><span class="current-price">UGX ' + product.price.toLocaleString() + '</span>' + (product.originalPrice > product.price ? '<span class="original-price">UGX ' + product.originalPrice.toLocaleString() + '</span>' : '') + '</div><button class="add-cart-btn">Add to Cart</button></div>';
            grid.appendChild(card);
            card.querySelector('.product-image').addEventListener('click', function() { window.location.href = 'product.html?id=' + product.id; });
            card.querySelector('.add-cart-btn').addEventListener('click', function(e) { e.stopPropagation(); addToCart(product.id, 1); updateCartCount(); showNotification('Added to cart!'); });
        });
        var countEl = document.querySelector('#results-count');
        if (countEl) countEl.textContent = results.length + ' result' + (results.length !== 1 ? 's' : '');
    }, 300);
}

// ========== DOM READY ==========
document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.getElementById('hamburgerBtn');
    var closeBtn = document.getElementById('closeMobileBtn');
    if (hamburger) hamburger.addEventListener('click', toggleMobileMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMobileMenu);
    document.getElementById('overlay')?.addEventListener('click', closeMobileMenu);
    
    if (document.querySelector('#category-grid')) loadCategories();
    if (document.querySelector('#featured-products')) loadFeaturedProducts();
    if (document.querySelector('#cart-items')) loadCartItems();
    if (document.querySelector('#product-gallery')) setupProductGallery();
    if (document.querySelector('#category-product-grid')) loadCategoryProducts();
    if (document.querySelector('#search-product-grid')) loadSearchResults();
    
    initHeroSlider();
    setupFAB();
    updateCartCount();
    
    var checkoutBtn = document.querySelector('#checkout-btn');
    if (checkoutBtn) checkoutBtn.addEventListener('click', proceedToCheckout);
});

// Export for global use
window.addToCart = addToCart;
window.updateCartCount = updateCartCount;
window.showNotification = showNotification;
window.doSearch = doSearch;
window.proceedToCheckout = proceedToCheckout;