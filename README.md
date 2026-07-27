<!DOCTYPE html>

<html lang="en">

<head>

```
<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>PKFY Logistics | Auction Pickup, Bidding Assistance & Delivery</title>

<meta name="description"
      content="PKFY Logistics provides auction bidding assistance, auction house pickup, packing, marketplace pickup and delivery, small business delivery, and personal delivery services across Ontario.">

<link rel="stylesheet" href="style.css">

<link rel="preconnect" href="https://fonts.googleapis.com">

<link rel="preconnect"
      href="https://fonts.gstatic.com"
      crossorigin>

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
      rel="stylesheet">

<link rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
```

</head>

<body>

<!-- =========================
     HEADER
========================= -->

<header class="header" id="header">

```
<div class="container nav-container">


    <!-- LOGO -->

    <a href="#home"
       class="logo-link"
       aria-label="PKFY Logistics Home">

        <img
            src="https://i.postimg.cc/qqn0224D/IMG-2800.png"
            alt="PKFY Logistics"
            class="logo">

    </a>


    <!-- DESKTOP / MOBILE NAVIGATION -->

    <nav class="navbar" id="navbar">

        <a href="#home">Home</a>

        <a href="#services">Services</a>

        <a href="#auction-assistance">Auctions</a>

        <a href="#pricing">Pricing</a>

        <a href="#tracking">Track Delivery</a>

        <a href="#about">About</a>

        <a href="#contact">Contact</a>

        <a href="https://forms.gle/nzZoX1SvR768UcBG8"
           target="_blank"
           rel="noopener"
           class="nav-request">

            Request a Pickup

        </a>

    </nav>


    <!-- BIDDING CART -->

    <button
        class="cart-button"
        id="cartButton"
        aria-label="Open bidding requests">

        <i class="fa-solid fa-cart-shopping"></i>

        <span class="cart-count"
              id="cartCount">
            0
        </span>

    </button>


</div>
```

</header>

<!-- =========================
     BIDDING CART DRAWER
========================= -->

<div class="cart-overlay"
     id="cartOverlay">
</div>

<aside class="cart-drawer"
       id="cartDrawer"
       aria-label="Bidding Requests">

```
<div class="cart-header">

    <div>

        <span class="cart-label">
            PKFY LOGISTICS
        </span>

        <h2>
            My Bidding Requests
        </h2>

    </div>


    <button
        class="cart-close"
        id="cartClose"
        aria-label="Close bidding requests">

        <i class="fa-solid fa-xmark"></i>

    </button>

</div>


<div class="cart-body"
     id="cartBody">


    <div class="empty-cart">

        <i class="fa-solid fa-gavel"></i>

        <h3>
            No Bidding Requests Yet
        </h3>

        <p>
            Add an auction item you want
            PKFY Logistics to help you with.
        </p>

        <a href="#auction-assistance"
           class="btn btn-gold cart-auction-link">

            Request Auction Assistance

        </a>

    </div>


</div>


<div class="cart-footer"
     id="cartFooter">

    <button
        class="btn btn-gold"
        id="submitBiddingRequest">

        Submit Bidding Request

        <i class="fa-solid fa-paper-plane"></i>

    </button>

</div>
```

</aside>

<!-- =========================
     HERO
========================= -->

<section class="hero" id="home">

```
<div class="hero-overlay"></div>


<div class="container hero-content">


    <div class="hero-text">


        <span class="hero-label">
            AUCTION • MARKETPLACE • DELIVERY
        </span>


        <h1>

            WON AN AUCTION ITEM?

            <span>
                WE'LL BRING IT HOME.
            </span>

        </h1>


        <p>

            From auction bidding assistance to pickup,
            professional packing, and doorstep delivery,
            PKFY Logistics makes the entire process
            simple and convenient.

        </p>


        <div class="hero-buttons">


            <a href="https://forms.gle/nzZoX1SvR768UcBG8"
               target="_blank"
               rel="noopener"
               class="btn btn-gold">

                Request a Pickup

                <i class="fa-solid fa-arrow-right"></i>

            </a>


            <a href="#auction-assistance"
               class="btn btn-outline">

                Request Bidding Assistance

            </a>


        </div>


        <p class="hero-small">

            You Find It. We Handle the Rest.

        </p>


    </div>


    <div class="hero-visual">

        <div class="hero-card">


            <div class="truck-animation">

                <i class="fa-solid fa-truck-fast"></i>

            </div>


            <div class="delivery-box">

                <i class="fa-solid fa-box-open"></i>

                <span>
                    Safe Delivery
                </span>

            </div>


        </div>

    </div>


</div>
```

</section>

<!-- =========================
     TRUST BAR
========================= -->

<section class="trust-bar">

```
<div class="container trust-grid">


    <div>

        <i class="fa-solid fa-shield-halved"></i>

        <span>
            Safe Handling
        </span>

    </div>


    <div>

        <i class="fa-solid fa-box"></i>

        <span>
            Professional Packing
        </span>

    </div>


    <div>

        <i class="fa-solid fa-truck"></i>

        <span>
            Reliable Delivery
        </span>

    </div>


    <div>

        <i class="fa-solid fa-comments"></i>

        <span>
            Fast Communication
        </span>

    </div>


</div>
```

</section>

<!-- =========================
     HOW IT WORKS
========================= -->

<section class="section dark-section"
         id="how-it-works">

```
<div class="container">


    <div class="section-heading light">

        <span class="section-label">
            HOW IT WORKS
        </span>


        <h2>

            Simple From
            <span>
                Start to Finish.
            </span>

        </h2>

    </div>


    <div class="steps">


        <div class="step">

            <div class="step-number">
                01
            </div>

            <i class="fa-solid fa-cart-shopping"></i>

            <h3>
                You Buy
            </h3>

            <p>
                Purchase an item from an auction,
                marketplace, local seller,
                or small business.
            </p>

        </div>


        <div class="step">

            <div class="step-number">
                02
            </div>

            <i class="fa-solid fa-file-circle-check"></i>

            <h3>
                You Request
            </h3>

            <p>
                Submit your pickup and delivery
                details through our online form.
            </p>

        </div>


        <div class="step">

            <div class="step-number">
                03
            </div>

            <i class="fa-solid fa-box"></i>

            <h3>
                We Pick & Pack
            </h3>

            <p>
                Our team picks up your item
                and professionally packs it
                when required.
            </p>

        </div>


        <div class="step">

            <div class="step-number">
                04
            </div>

            <i class="fa-solid fa-house"></i>

            <h3>
                We Deliver
            </h3>

            <p>
                We safely deliver your item
                directly to your home or business.
            </p>

        </div>


    </div>

</div>
```

</section>

<!-- =========================
     AUCTION ASSISTANCE
========================= -->

<section class="section auction-section"
         id="auction-assistance">

```
<div class="container auction-grid">


    <div class="auction-content">


        <span class="section-label">

            AUCTION BIDDING ASSISTANCE

        </span>


        <h2>

            Want Us to Bid?

            <span>
                Add Your Request.
            </span>

        </h2>


        <p>

            Tell PKFY Logistics what you are looking for.
            Add your auction item to your bidding request
            cart, review your requests, and submit them
            to our team.

        </p>


        <div class="auction-flow">


            <div>
                <strong>01</strong>
                Tell Us What You're Looking For
            </div>


            <div>
                <strong>02</strong>
                Tell Us Where the Item Is
            </div>


            <div>
                <strong>03</strong>
                Set Your Maximum Bid
            </div>


            <div>
                <strong>04</strong>
                Add Your Request to the Cart
            </div>


            <div>
                <strong>05</strong>
                PKFY Reviews Your Request
            </div>


            <div>
                <strong>06</strong>
                We Assist With the Bidding Process
            </div>


            <div>
                <strong>07</strong>
                We Pick Up, Pack & Deliver
            </div>


        </div>


        <button
            class="btn btn-gold"
            id="openBiddingForm">

            Add Bidding Request

            <i class="fa-solid fa-cart-plus"></i>

        </button>


    </div>


    <div class="auction-visual">

        <div class="auction-image-card">

            <i class="fa-solid fa-gavel"></i>

            <h3>

                Find It.
                Bid For It.
                We'll Bring It Home.

            </h3>

        </div>

    </div>


</div>


<div class="container disclaimer">


    <i class="fa-solid fa-circle-info"></i>


    <p>

        Bidding assistance is provided only with
        customer authorization. Auction purchases
        remain subject to auction house terms,
        conditions, fees, and applicable taxes.
        Final service fees will be confirmed before
        proceeding.

    </p>


</div>
```

</section>

<!-- =========================
     SERVICES
========================= -->

<section class="section"
         id="services">

```
<div class="container">


    <div class="section-heading">

        <span class="section-label">
            OUR SERVICES
        </span>


        <h2>

            One Simple Solution

            <span>
                For Your Delivery Needs.
            </span>

        </h2>

    </div>


    <div class="services-grid">


        <div class="service-card">

            <div class="service-icon">
                <i class="fa-solid fa-gavel"></i>
            </div>

            <h3>
                Auction Bidding Assistance
            </h3>

            <p>
                Tell us what you're looking for and
                we can assist with the auction process
                with your authorization.
            </p>

        </div>


        <div class="service-card">

            <div class="service-icon">
                <i class="fa-solid fa-gavel"></i>
            </div>

            <h3>
                Auction House Pickup
            </h3>

            <p>
                We pick up your purchased
                auction items directly
                from the auction house.
            </p>

        </div>


        <div class="service-card">

            <div class="service-icon">
                <i class="fa-solid fa-box"></i>
            </div>

            <h3>
                Packing Services
            </h3>

            <p>
                Need extra protection?
                We can professionally pack
                your items for safe transportation.
            </p>

        </div>


        <div class="service-card">

            <div class="service-icon">
                <i class="fa-solid fa-house"></i>
            </div>

            <h3>
                Doorstep Delivery
            </h3>

            <p>
                We safely deliver your purchases
                directly to your home or business.
            </p>

        </div>


        <div class="service-card">

            <div class="service-icon">
                <i class="fa-brands fa-facebook"></i>
            </div>

            <h3>
                Marketplace Delivery
            </h3>

            <p>
                Bought something from Facebook
                Marketplace, Kijiji, or another
                local seller? We can help.
            </p>

        </div>


        <div class="service-card">

            <div class="service-icon">
                <i class="fa-solid fa-store"></i>
            </div>

            <h3>
                Small Business Delivery
            </h3>

            <p>
                Reliable delivery support for
                small businesses that need help
                getting products to customers.
            </p>

        </div>


    </div>

</div>
```

</section>

<!-- =========================
     PRICING
========================= -->

<section class="section pricing-section"
         id="pricing">

```
<div class="container">


    <div class="section-heading">


        <span class="section-label">

            ONTARIO-WIDE SERVICE

        </span>


        <h2>

            Simple & Transparent

            <span>
                Pricing.
            </span>

        </h2>


        <p>

            Prices are for small and medium-size boxes.

            <strong>
                All prices listed are for ONE ITEM ONLY.
            </strong>

        </p>


    </div>


    <div class="pricing-grid">


        <div class="price-card featured">


            <div class="price-header">

                <i class="fa-solid fa-truck"></i>

                <h3>
                    Delivery
                </h3>

                <p>
                    Pick + Pack + Drop
                </p>

            </div>


            <div class="price-row">

                <div>
                    <strong>
                        Under 25 km
                    </strong>

                    <span>
                        Local
                    </span>
                </div>


                <div>
                    <b>
                        $15
                    </b>

                    <span>
                        Delivery Only
                    </span>
                </div>


                <div>
                    <b>
                        $18
                    </b>

                    <span>
                        With Packing
                    </span>
                </div>

            </div>


            <div class="price-row">

                <div>
                    <strong>
                        Under 50 km
                    </strong>

                    <span>
                        Local
                    </span>
                </div>


                <div>
                    <b>
                        $20
                    </b>

                    <span>
                        Delivery Only
                    </span>
                </div>


                <div>
                    <b>
                        $21.90
                    </b>

                    <span>
                        With Packing
                    </span>
                </div>

            </div>


            <div class="price-row">

                <div>
                    <strong>
                        Regional
                    </strong>

                    <span>
                        Long Distance
                    </span>
                </div>


                <div>
                    <b>
                        $25
                    </b>

                    <span>
                        Delivery Only
                    </span>
                </div>


                <div>
                    <b>
                        $27.90
                    </b>

                    <span>
                        With Packing
                    </span>
                </div>

            </div>


        </div>


        <div class="price-card">


            <div class="price-header">

                <i class="fa-solid fa-location-dot"></i>

                <h3>
                    Pickup Only
                </h3>

                <p>
                    Customer Collects From Us
                </p>

            </div>


            <p class="price-description">

                We pick your order up from the seller,
                and you pick it up from our location.

                Packing is NOT included.

            </p>


            <div class="simple-price">


                <div>

                    <span>
                        Under 25 km
                    </span>

                    <strong>
                        $10
                    </strong>

                </div>


                <div>

                    <span>
                        Under 50 km
                    </span>

                    <strong>
                        $13
                    </strong>

                </div>


                <div>

                    <span>
                        Under 100 km
                    </span>

                    <strong>
                        $15
                    </strong>

                </div>


            </div>


        </div>


    </div>


    <div class="price-notes">


        <div>

            <i class="fa-solid fa-triangle-exclamation"></i>

            <div>

                <h4>
                    Large / Oversized Packages
                </h4>

                <p>
                    Prices may vary depending
                    on size and weight.
                </p>

            </div>

        </div>


        <div>

            <i class="fa-solid fa-shield-halved"></i>

            <div>

                <h4>
                    Special Handling / Insurance
                </h4>

                <p>
                    Extra security or insurance
                    pricing varies based on item value.
                </p>

            </div>

        </div>


        <div>

            <i class="fa-solid fa-circle-info"></i>

            <div>

                <h4>
                    Important Notes
                </h4>

                <p>
                    Prices may vary slightly based on exact
                    distance and area. All prices are before tax.
                    Final pricing will be confirmed after reviewing
                    your order details.
                </p>

            </div>

        </div>


    </div>


    <div class="price-cta">


        <p>
            Need a delivery? Get your exact quote today.
        </p>


        <a href="https://forms.gle/nzZoX1SvR768UcBG8"
           target="_blank"
           rel="noopener"
           class="btn btn-gold">

            Get a Quote

            <i class="fa-solid fa-arrow-right"></i>

        </a>


    </div>


</div>
```

</section>

<!-- =========================
     TRACKING
========================= -->

<section class="section dark-section"
         id="tracking">

```
<div class="container tracking-container">


    <div class="section-heading light">


        <span class="section-label">
            DELIVERY TRACKING
        </span>


        <h2>

            Track Your

            <span>
                Delivery.
            </span>

        </h2>


        <p>

            Enter your tracking number
            to check your delivery status.

        </p>


    </div>


    <div class="tracking-form">


        <input
            type="text"
            id="trackingNumber"
            placeholder="Enter Tracking Number">


        <button
            type="button"
            id="trackButton"
            class="btn btn-gold">

            Track Delivery

        </button>


    </div>


    <div class="tracking-result"
         id="trackingResult">

    </div>


    <div class="timeline">


        <div class="timeline-item active">

            <div class="timeline-icon">
                <i class="fa-solid fa-file"></i>
            </div>

            <span>
                Request Received
            </span>

        </div>


        <div class="timeline-item">

            <div class="timeline-icon">
                <i class="fa-solid fa-calendar-check"></i>
            </div>

            <span>
                Pickup Confirmed
            </span>

        </div>


        <div class="timeline-item">

            <div class="timeline-icon">
                <i class="fa-solid fa-box"></i>
            </div>

            <span>
                Item Picked Up
            </span>

        </div>


        <div class="timeline-item">

            <div class="timeline-icon">
                <i class="fa-solid fa-box-open"></i>
            </div>

            <span>
                Packing
            </span>

        </div>


        <div class="timeline-item">

            <div class="timeline-icon">
                <i class="fa-solid fa-truck"></i>
            </div>

            <span>
                Out for Delivery
            </span>

        </div>


        <div class="timeline-item">

            <div class="timeline-icon">
                <i class="fa-solid fa-house-circle-check"></i>
            </div>

            <span>
                Delivered
            </span>

        </div>


    </div>


</div>
```

</section>

<!-- =========================
     ABOUT FOUNDER
========================= -->

<section class="section about-section"
         id="about">

```
<div class="container founder-grid">


    <div class="founder-photo-wrapper">

        <div class="founder-photo-frame">

            <img
                src="https://i.postimg.cc/qqpQGTTB/IMG-2801.png"
                alt="Arsh Bhullar - Founder and President of PKFY Logistics"
                class="founder-photo">

        </div>


        <div class="experience-badge">

            <strong>
                5+
            </strong>

            <span>
                Years of<br>
                Industry Experience
            </span>

        </div>

    </div>


    <div class="about-content">


        <span class="section-label">

            MEET THE FOUNDER

        </span>


        <h2>

            ARSH

            <span>
                BHULLAR
            </span>

        </h2>


        <h3 class="founder-title">

            Founder & President of
            <strong>
                PKFY LOGISTICS
            </strong>

        </h3>


        <p>

            With more than <strong>5 years of experience
            in the logistics, warehouse, and delivery
            industry</strong>, I founded PKFY Logistics
            with one simple goal: to make every delivery
            reliable, professional, and stress-free.

        </p>


        <p>

            Over the years, I have gained hands-on
            experience working with products of different
            sizes, handling pickups, packing, warehouse
            operations, and coordinating deliveries in
            fast-paced environments.

        </p>


        <p>

            At PKFY Logistics, we go beyond simply moving
            a package from one place to another. We take
            care of the entire process, from <strong>pickup
            and careful handling to packing and final
            delivery</strong>.

        </p>


        <p>

            Whether you are buying an item from an auction
            house, purchasing from a marketplace, or need
            help moving a product from a seller to your
            doorstep, our goal is to make the process
            simple and convenient.

        </p>


        <div class="founder-values">


            <div>
                <i class="fa-solid fa-shield-halved"></i>
                Trust & Safety
            </div>


            <div>
                <i class="fa-solid fa-handshake"></i>
                Reliable Service
            </div>


            <div>
                <i class="fa-solid fa-box-open"></i>
                Careful Handling
            </div>


            <div>
                <i class="fa-solid fa-heart"></i>
                Customer Focused
            </div>


        </div>


        <div class="founder-signature">

            <strong>
                ARSH BHULLAR
            </strong>

            <span>
                Founder & President
            </span>

        </div>


    </div>


</div>
```

</section>

<!-- =========================
     CTA
========================= -->

<section class="cta-section">

```
<div class="container cta-content">


    <span>
        READY TO GET STARTED?
    </span>


    <h2>

        You Find It.

        <strong>
            We Handle the Rest.
        </strong>

    </h2>


    <p>
        Request your pickup or get a quote today.
    </p>


    <a href="https://forms.gle/nzZoX1SvR768UcBG8"
       target="_blank"
       rel="noopener"
       class="btn btn-black">

        Request a Pickup

        <i class="fa-solid fa-arrow-right"></i>

    </a>


</div>
```

</section>

<!-- =========================
     CONTACT
========================= -->

<section class="section contact-section"
         id="contact">

```
<div class="container">


    <div class="section-heading">


        <span class="section-label">
            CONTACT US
        </span>


        <h2>

            Ready to Get

            <span>
                Started?
            </span>

        </h2>


    </div>


    <div class="contact-grid">


        <a href="tel:+16477974686"
           class="contact-card">

            <i class="fa-solid fa-phone"></i>

            <h3>
                Call Us
            </h3>

            <p>
                +1 (647) 797-4686
            </p>

        </a>


        <a href="tel:+14375660306"
           class="contact-card">

            <i class="fa-solid fa-phone"></i>

            <h3>
                Call Us
            </h3>

            <p>
                +1 (437) 566-0306
            </p>

        </a>


        <a href="mailto:Pkfylogistics@gmail.com"
           class="contact-card">

            <i class="fa-solid fa-envelope"></i>

            <h3>
                Email Us
            </h3>

            <p>
                Pkfylogistics@gmail.com
            </p>

        </a>


        <a href="https://www.instagram.com/pkfylogistics?igsh=MTdtYTF1ZHd6NTQ0aA=="
           target="_blank"
           rel="noopener"
           class="contact-card">

            <i class="fa-brands fa-instagram"></i>

            <h3>
                Instagram
            </h3>

            <p>
                @PKFYlogistics
            </p>

        </a>


    </div>


</div>
```

</section>

<!-- =========================
     FOOTER
========================= -->

<footer class="footer">

```
<div class="container footer-grid">


    <div class="footer-brand">


        <a href="#home">

            <img
                src="https://i.postimg.cc/qqn0224D/IMG-2800.png"
                alt="PKFY Logistics">

        </a>


        <p>
            Pick. Pack. Deliver.
        </p>


        <strong>
            Where Every Delivery Matters.
        </strong>


    </div>


    <div class="footer-links">


        <h4>
            Quick Links
        </h4>


        <a href="#home">
            Home
        </a>


        <a href="#services">
            Services
        </a>


        <a href="#auction-assistance">
            Auctions
        </a>


        <a href="#pricing">
            Pricing
        </a>


        <a href="#tracking">
            Track Delivery
        </a>


        <a href="#about">
            About
        </a>


        <a href="#contact">
            Contact
        </a>


    </div>


    <div class="footer-contact">


        <h4>
            Contact
        </h4>


        <a href="tel:+16477974686">
            +1 (647) 797-4686
        </a>


        <a href="tel:+14375660306">
            +1 (437) 566-0306
        </a>


        <a href="mailto:Pkfylogistics@gmail.com">
            Pkfylogistics@gmail.com
        </a>


    </div>


    <div class="footer-social">


        <h4>
            Follow Us
        </h4>


        <a href="https://www.instagram.com/pkfylogistics?igsh=MTdtYTF1ZHd6NTQ0aA=="
           target="_blank"
           rel="noopener">

            <i class="fa-brands fa-instagram"></i>

            @PKFYlogistics

        </a>


    </div>


</div>


<div class="footer-bottom">


    <p>

        © <span id="year"></span>
        PKFY Logistics.
        All Rights Reserved.

    </p>


    <a href="#">
        Privacy Policy
    </a>


</div>
```

</footer>

<!-- =========================
     FLOATING REQUEST
========================= -->

<a href="https://forms.gle/nzZoX1SvR768UcBG8"
target="_blank"
rel="noopener"
class="floating-request">

```
<i class="fa-solid fa-paper-plane"></i>

<span>
    Request a Pickup
</span>
```

</a>

<!-- =========================
     BIDDING REQUEST MODAL
========================= -->

<div class="bidding-modal"
     id="biddingModal">

```
<div class="bidding-modal-content">


    <button
        class="modal-close"
        id="modalClose">

        <i class="fa-solid fa-xmark"></i>

    </button>


    <span class="section-label">
        PKFY AUCTION ASSISTANCE
    </span>


    <h2>
        Add Bidding Request
    </h2>


    <p>
        Tell us what you are looking for.
    </p>


    <form id="biddingForm">


        <div class="form-group">

            <label>
                Item Name *
            </label>

            <input
                type="text"
                id="itemName"
                placeholder="Example: Dining Table"
                required>

        </div>


        <div class="form-group">

            <label>
                Auction House / Website *
            </label>

            <input
                type="text"
                id="auctionName"
                placeholder="Example: ABC Auction House"
                required>

        </div>


        <div class="form-group">

            <label>
                Auction Item Link
            </label>

            <input
                type="url"
                id="itemLink"
                placeholder="Paste auction item link">

        </div>


        <div class="form-row">


            <div class="form-group">

                <label>
                    Maximum Bid *
                </label>

                <input
                    type="number"
                    id="maxBid"
                    min="0"
                    step="0.01"
                    placeholder="$0.00"
                    required>

            </div>


            <div class="form-group">

                <label>
                    Quantity
                </label>

                <input
                    type="number"
                    id="itemQuantity"
                    min="1"
                    value="1">

            </div>


        </div>


        <div class="form-group">

            <label>
                Additional Details
            </label>

            <textarea
                id="itemDetails"
                rows="4"
                placeholder="Tell us anything else we should know..."></textarea>

        </div>


        <button
            type="submit"
            class="btn btn-gold">

            Add to Bidding Cart

            <i class="fa-solid fa-cart-plus"></i>

        </button>


    </form>


</div>
```

</div>

<script src="script.js"></script>

</body>

</html>
