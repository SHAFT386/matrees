// =============================================================
// product.js - All Products for TOP-NOTCH MATTRESSES & BEDDINGS
// Categories: mattresses, bedsheets, duvets
// =============================================================

var products = [

    // ========== MATTRESSES ==========
    {
        id: 'm001',
        name: 'Premium Orthopedic Mattress - 6x6ft',
        description: 'High-density foam orthopedic mattress designed for optimal spinal alignment and pressure relief. Provides excellent support for back pain relief. Features a breathable, hypoallergenic cover.',
        price: 450000,
        originalPrice: 550000,
        category: 'mattresses',
        images: ['mattress1.jpg', 'mattress-ortho-2.jpg', 'mattress-ortho-3.jpg'],
        specifications: [
            { name: 'Size', value: '6x6ft (180x180cm)' },
            { name: 'Material', value: 'High-density memory foam' },
            { name: 'Thickness', value: '8 inches' },
            { name: 'Warranty', value: '5 years' }
        ]
    },
    {
        id: 'm002',
        name: 'Luxury Pocket Spring Mattress - 6x6ft',
        description: 'Luxury pocket spring mattress with individually wrapped coils for motion isolation and targeted support. Topped with cooling gel memory foam for ultimate comfort.',
        price: 650000,
        originalPrice: 780000,
        category: 'mattresses',
        images: ['mattress-pocket-spring-1.jpg', 'mattress-pocket-spring-2.jpg', 'mattress-pocket-spring-3.jpg'],
        specifications: [
            { name: 'Size', value: '6x6ft (180x180cm)' },
            { name: 'Material', value: 'Pocket springs + gel memory foam' },
            { name: 'Thickness', value: '10 inches' },
            { name: 'Warranty', value: '7 years' }
        ]
    },
    {
        id: 'm003',
        name: 'Economy Foam Mattress - 5x6ft',
        description: 'Comfortable and affordable foam mattress perfect for guest rooms or budget-conscious buyers. Medium-firm feel with good support.',
        price: 250000,
        originalPrice: 320000,
        category: 'mattresses',
        images: ['mattress-economy-1.jpg', 'mattress-economy-2.jpg'],
        specifications: [
            { name: 'Size', value: '5x6ft (150x180cm)' },
            { name: 'Material', value: 'High-resilience foam' },
            { name: 'Thickness', value: '6 inches' },
            { name: 'Warranty', value: '2 years' }
        ]
    },
    {
        id: 'm004',
        name: 'King Size Orthopedic Mattress - 7x6ft',
        description: 'Premium orthopedic mattress for king-size beds. Extra thickness and support for superior comfort and pressure relief.',
        price: 680000,
        originalPrice: 850000,
        category: 'mattresses',
        images: ['mattress-king-1.jpg', 'mattress-king-2.jpg', 'mattress-king-3.jpg'],
        specifications: [
            { name: 'Size', value: '7x6ft (210x180cm)' },
            { name: 'Material', value: 'Memory foam + support core' },
            { name: 'Thickness', value: '10 inches' },
            { name: 'Warranty', value: '5 years' }
        ]
    },
    {
        id: 'm005',
        name: 'Bamboo Charcoal Memory Foam Mattress - 6x6ft',
        description: 'Infused with bamboo charcoal for natural odor control and moisture wicking. Provides cool, comfortable sleep with excellent pressure relief.',
        price: 520000,
        originalPrice: 620000,
        category: 'mattresses',
        images: ['mattress-bamboo-1.jpg', 'mattress-bamboo-2.jpg'],
        specifications: [
            { name: 'Size', value: '6x6ft (180x180cm)' },
            { name: 'Material', value: 'Bamboo charcoal memory foam' },
            { name: 'Thickness', value: '8 inches' },
            { name: 'Warranty', value: '5 years' }
        ]
    },
    {
        id: 'm006',
        name: 'Baby Crib Mattress - 4x2ft',
        description: 'Firm, safe mattress for baby cribs. Made with hypoallergenic materials and a waterproof cover for easy cleaning.',
        price: 85000,
        originalPrice: 110000,
        category: 'mattresses',
        images: ['crib-mattress-1.jpg', 'crib-mattress-2.jpg'],
        specifications: [
            { name: 'Size', value: '4x2ft (120x60cm)' },
            { name: 'Material', value: 'Firm foam + waterproof cover' },
            { name: 'Thickness', value: '4 inches' },
            { name: 'Safety', value: 'Non-toxic, hypoallergenic' }
        ]
    },
    {
        id: 'm007',
        name: 'Double Sided Mattress - 5x6ft',
        description: 'Reversible mattress with medium-firm on one side and soft on the other. Extends mattress life with flip-able design.',
        price: 380000,
        originalPrice: 470000,
        category: 'mattresses',
        images: ['mattress-double-sided-1.jpg', 'mattress-double-sided-2.jpg'],
        specifications: [
            { name: 'Size', value: '5x6ft (150x180cm)' },
            { name: 'Material', value: 'High-density foam' },
            { name: 'Thickness', value: '7 inches' },
            { name: 'Warranty', value: '3 years' }
        ]
    },
    {
        id: 'm008',
        name: 'Latex Mattress - 6x6ft',
        description: 'Natural latex mattress offering exceptional durability, breathability, and hypoallergenic properties. Perfect for allergy sufferers.',
        price: 750000,
        originalPrice: 900000,
        category: 'mattresses',
        images: ['mattress-latex-1.jpg', 'mattress-latex-2.jpg', 'mattress-latex-3.jpg'],
        specifications: [
            { name: 'Size', value: '6x6ft (180x180cm)' },
            { name: 'Material', value: 'Natural latex' },
            { name: 'Thickness', value: '9 inches' },
            { name: 'Warranty', value: '10 years' }
        ]
    },

    // ========== BEDSHEETS ==========
    {
        id: 'b001',
        name: 'Egyptian Cotton Bedsheet Set - 6x6ft',
        description: 'Luxurious 100% Egyptian cotton bedsheet set. Soft, breathable, and durable. Set includes 1 fitted sheet, 1 flat sheet, and 2 pillowcases.',
        price: 120000,
        originalPrice: 160000,
        category: 'bedsheets',
        images: ['bedsheet-egyptian-1.jpg', 'bedsheet-egyptian-2.jpg', 'bedsheet-egyptian-3.jpg'],
        specifications: [
            { name: 'Size', value: '6x6ft (180x180cm)' },
            { name: 'Material', value: '100% Egyptian cotton' },
            { name: 'Thread Count', value: '400' },
            { name: 'Pieces', value: '4 pieces (1 fitted, 1 flat, 2 pillowcases)' }
        ]
    },
    {
        id: 'b002',
        name: 'Microfiber Bedsheet Set - 6x6ft - Navy Blue',
        description: 'Wrinkle-resistant, fade-resistant microfiber bedsheet set. Soft, comfortable, and easy to care for. Set includes 1 fitted sheet, 1 flat sheet, and 2 pillowcases.',
        price: 75000,
        originalPrice: 100000,
        category: 'bedsheets',
        images: ['bedsheet-microfiber-navy-1.jpg', 'bedsheet-microfiber-navy-2.jpg'],
        specifications: [
            { name: 'Size', value: '6x6ft (180x180cm)' },
            { name: 'Material', value: 'Microfiber polyester' },
            { name: 'Color', value: 'Navy Blue' },
            { name: 'Pieces', value: '4 pieces' }
        ]
    },
    {
        id: 'b003',
        name: 'Microfiber Bedsheet Set - 6x6ft - Burgundy',
        description: 'Wrinkle-resistant, fade-resistant microfiber bedsheet set. Soft, comfortable, and easy to care for. Set includes 1 fitted sheet, 1 flat sheet, and 2 pillowcases.',
        price: 75000,
        originalPrice: 100000,
        category: 'bedsheets',
        images: ['bedsheet-microfiber-burgundy-1.jpg', 'bedsheet-microfiber-burgundy-2.jpg'],
        specifications: [
            { name: 'Size', value: '6x6ft (180x180cm)' },
            { name: 'Material', value: 'Microfiber polyester' },
            { name: 'Color', value: 'Burgundy' },
            { name: 'Pieces', value: '4 pieces' }
        ]
    },
    {
        id: 'b004',
        name: 'Microfiber Bedsheet Set - 5x6ft - Grey',
        description: 'Wrinkle-resistant, fade-resistant microfiber bedsheet set. Soft, comfortable, and easy to care for. Set includes 1 fitted sheet, 1 flat sheet, and 2 pillowcases.',
        price: 65000,
        originalPrice: 85000,
        category: 'bedsheets',
        images: ['bedsheet-microfiber-grey-1.jpg', 'bedsheet-microfiber-grey-2.jpg'],
        specifications: [
            { name: 'Size', value: '5x6ft (150x180cm)' },
            { name: 'Material', value: 'Microfiber polyester' },
            { name: 'Color', value: 'Grey' },
            { name: 'Pieces', value: '4 pieces' }
        ]
    },
    {
        id: 'b005',
        name: 'Striped Cotton Bedsheet Set - 6x6ft',
        description: 'Elegant striped design bedsheet set made from premium cotton. Breathable and comfortable for year-round use.',
        price: 95000,
        originalPrice: 130000,
        category: 'bedsheets',
        images: ['bedsheet-striped-1.jpg', 'bedsheet-striped-2.jpg', 'bedsheet-striped-3.jpg'],
        specifications: [
            { name: 'Size', value: '6x6ft (180x180cm)' },
            { name: 'Material', value: 'Premium cotton' },
            { name: 'Design', value: 'Striped pattern' },
            { name: 'Pieces', value: '4 pieces' }
        ]
    },
    {
        id: 'b006',
        name: 'Flannel Bedsheet Set - 6x6ft - Winter Warm',
        description: 'Warm and cozy flannel bedsheet set perfect for cold nights. Soft brushed fabric for extra comfort.',
        price: 110000,
        originalPrice: 145000,
        category: 'bedsheets',
        images: ['bedsheet-flannel-1.jpg', 'bedsheet-flannel-2.jpg'],
        specifications: [
            { name: 'Size', value: '6x6ft (180x180cm)' },
            { name: 'Material', value: 'Flannel cotton' },
            { name: 'Season', value: 'Winter' },
            { name: 'Pieces', value: '4 pieces' }
        ]
    },
    {
        id: 'b007',
        name: 'Satin Bedsheet Set - Queen Size',
        description: 'Luxurious satin bedsheet set that adds elegance to any bedroom. Smooth, shiny, and gentle on hair and skin.',
        price: 135000,
        originalPrice: 180000,
        category: 'bedsheets',
        images: ['bedsheet-satin-1.jpg', 'bedsheet-satin-2.jpg'],
        specifications: [
            { name: 'Size', value: '6x6ft (180x180cm)' },
            { name: 'Material', value: 'Satin polyester' },
            { name: 'Feel', value: 'Smooth and silky' },
            { name: 'Pieces', value: '4 pieces' }
        ]
    },
    {
        id: 'b008',
        name: 'Kids Cartoon Bedsheet Set - 4x6ft',
        description: 'Fun and colorful cartoon-themed bedsheet set for children. Made from soft, durable cotton blend.',
        price: 55000,
        originalPrice: 75000,
        category: 'bedsheets',
        images: ['bedsheet-kids-1.jpg', 'bedsheet-kids-2.jpg'],
        specifications: [
            { name: 'Size', value: '4x6ft (120x180cm)' },
            { name: 'Material', value: 'Cotton blend' },
            { name: 'Design', value: 'Cartoon characters' },
            { name: 'Pieces', value: '3 pieces' }
        ]
    },
    {
        id: 'b009',
        name: 'Oxford Pillowcase Pair - Standard Size',
        description: 'High-quality Oxford pillowcases with elegant border design. Soft, breathable, and durable.',
        price: 35000,
        originalPrice: 50000,
        category: 'bedsheets',
        images: ['pillowcase-oxford-1.jpg', 'pillowcase-oxford-2.jpg'],
        specifications: [
            { name: 'Size', value: 'Standard (50x70cm)' },
            { name: 'Material', value: 'Premium cotton' },
            { name: 'Design', value: 'Oxford border' },
            { name: 'Quantity', value: '2 pillowcases' }
        ]
    },
    {
        id: 'b010',
        name: 'Waterproof Mattress Protector - 6x6ft',
        description: 'Breathable waterproof mattress protector that guards against spills, stains, and allergens. Machine washable.',
        price: 65000,
        originalPrice: 85000,
        category: 'bedsheets',
        images: ['mattress-protector-1.jpg', 'mattress-protector-2.jpg'],
        specifications: [
            { name: 'Size', value: '6x6ft (180x180cm)' },
            { name: 'Material', value: 'Cotton top + TPU backing' },
            { name: 'Feature', value: 'Waterproof and breathable' },
            { name: 'Care', value: 'Machine washable' }
        ]
    },

    // ========== DUVETS & BEDCOVERS ==========
    {
        id: 'd001',
        name: 'Velvet Duvet Set - 6x6ft - Maroon',
        description: 'Luxurious velvet duvet set that adds warmth and elegance to your bedroom. Set includes 1 duvet cover, 1 bedsheet, and 2 pillowcases.',
        price: 165000,
        originalPrice: 200000,
        category: 'duvets',
        images: ['duvet-velvet-maroon-1.jpg', 'duvet-velvet-maroon-2.jpg', 'duvet-velvet-maroon-3.jpg'],
        specifications: [
            { name: 'Size', value: '6x6ft (180x180cm)' },
            { name: 'Material', value: 'Velvet' },
            { name: 'Color', value: 'Maroon' },
            { name: 'Pieces', value: '4 pieces' }
        ]
    },
    {
        id: 'd002',
        name: 'Velvet Duvet Set - 6x6ft - Royal Blue',
        description: 'Luxurious velvet duvet set that adds warmth and elegance to your bedroom. Set includes 1 duvet cover, 1 bedsheet, and 2 pillowcases.',
        price: 165000,
        originalPrice: 200000,
        category: 'duvets',
        images: ['duvet-velvet-blue-1.jpg', 'duvet-velvet-blue-2.jpg'],
        specifications: [
            { name: 'Size', value: '6x6ft (180x180cm)' },
            { name: 'Material', value: 'Velvet' },
            { name: 'Color', value: 'Royal Blue' },
            { name: 'Pieces', value: '4 pieces' }
        ]
    },
    {
        id: 'd003',
        name: 'Fluffy Faux Fur Duvet Set - 6x6ft - White',
        description: 'Ultra-soft faux fur duvet set for a cozy, luxurious feel. Perfect for cold weather. Set includes 1 duvet cover, 1 bedsheet, and 2 pillowcases.',
        price: 185000,
        originalPrice: 230000,
        category: 'duvets',
        images: ['duvet-faux-fur-white-1.jpg', 'duvet-faux-fur-white-2.jpg', 'duvet-faux-fur-white-3.jpg'],
        specifications: [
            { name: 'Size', value: '6x6ft (180x180cm)' },
            { name: 'Material', value: 'Faux fur' },
            { name: 'Color', value: 'White' },
            { name: 'Pieces', value: '4 pieces' }
        ]
    },
    {
        id: 'd004',
        name: 'Fluffy Faux Fur Duvet Set - 6x6ft - Grey',
        description: 'Ultra-soft faux fur duvet set for a cozy, luxurious feel. Perfect for cold weather. Set includes 1 duvet cover, 1 bedsheet, and 2 pillowcases.',
        price: 185000,
        originalPrice: 230000,
        category: 'duvets',
        images: ['duvet-faux-fur-grey-1.jpg', 'duvet-faux-fur-grey-2.jpg'],
        specifications: [
            { name: 'Size', value: '6x6ft (180x180cm)' },
            { name: 'Material', value: 'Faux fur' },
            { name: 'Color', value: 'Grey' },
            { name: 'Pieces', value: '4 pieces' }
        ]
    },
    {
        id: 'd005',
        name: 'Quilted Bedspread - 6x6ft - Cream',
        description: 'Elegant quilted bedspread with classic design. Lightweight yet warm, perfect for year-round use.',
        price: 145000,
        originalPrice: 180000,
        category: 'duvets',
        images: ['bedspread-quilted-cream-1.jpg', 'bedspread-quilted-cream-2.jpg'],
        specifications: [
            { name: 'Size', value: '6x6ft (180x180cm)' },
            { name: 'Material', value: 'Cotton blend with polyfill' },
            { name: 'Color', value: 'Cream' },
            { name: 'Type', value: 'Quilted bedspread' }
        ]
    },
    {
        id: 'd006',
        name: 'Quilted Bedspread - 6x6ft - Sage Green',
        description: 'Elegant quilted bedspread with classic design. Lightweight yet warm, perfect for year-round use.',
        price: 145000,
        originalPrice: 180000,
        category: 'duvets',
        images: ['bedspread-quilted-green-1.jpg', 'bedspread-quilted-green-2.jpg'],
        specifications: [
            { name: 'Size', value: '6x6ft (180x180cm)' },
            { name: 'Material', value: 'Cotton blend with polyfill' },
            { name: 'Color', value: 'Sage Green' },
            { name: 'Type', value: 'Quilted bedspread' }
        ]
    },
    {
        id: 'd007',
        name: 'Woolen Duvet Set - 6x6ft',
        description: 'Warm and breathable woolen duvet set perfect for cold climates. Natural temperature regulation.',
        price: 155000,
        originalPrice: 195000,
        category: 'duvets',
        images: ['duvet-wool-1.jpg', 'duvet-wool-2.jpg'],
        specifications: [
            { name: 'Size', value: '6x6ft (180x180cm)' },
            { name: 'Material', value: 'Wool blend fill' },
            { name: 'Cover', value: 'Cotton' },
            { name: 'Warmth', value: 'Extra warm' }
        ]
    },
    {
        id: 'd008',
        name: 'Childrens Duvet Set - 4x6ft - Unicorn',
        description: 'Magical unicorn-themed duvet set for children. Soft, colorful, and machine washable.',
        price: 85000,
        originalPrice: 110000,
        category: 'duvets',
        images: ['duvet-kids-unicorn-1.jpg', 'duvet-kids-unicorn-2.jpg'],
        specifications: [
            { name: 'Size', value: '4x6ft (120x180cm)' },
            { name: 'Material', value: 'Microfiber' },
            { name: 'Design', value: 'Unicorn pattern' },
            { name: 'Pieces', value: '3 pieces' }
        ]
    },
    {
        id: 'd009',
        name: 'Childrens Duvet Set - 4x6ft - Dinosaur',
        description: 'Fun dinosaur-themed duvet set for children. Soft, colorful, and machine washable.',
        price: 85000,
        originalPrice: 110000,
        category: 'duvets',
        images: ['duvet-kids-dino-1.jpg', 'duvet-kids-dino-2.jpg'],
        specifications: [
            { name: 'Size', value: '4x6ft (120x180cm)' },
            { name: 'Material', value: 'Microfiber' },
            { name: 'Design', value: 'Dinosaur pattern' },
            { name: 'Pieces', value: '3 pieces' }
        ]
    },
    {
        id: 'd010',
        name: 'Premium Down Alternative Comforter - 6x6ft',
        description: 'Luxurious down alternative comforter that provides warmth without the allergens. Hypoallergenic and machine washable.',
        price: 195000,
        originalPrice: 250000,
        category: 'duvets',
        images: ['comforter-down-alt-1.jpg', 'comforter-down-alt-2.jpg'],
        specifications: [
            { name: 'Size', value: '6x6ft (180x180cm)' },
            { name: 'Fill', value: 'Down alternative microfiber' },
            { name: 'Cover', value: '100% cotton' },
            { name: 'Feature', value: 'Hypoallergenic' }
        ]
    }

];

// Export for global use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = products;
}