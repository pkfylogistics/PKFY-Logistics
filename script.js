/* =====================================
PKFY LOGISTICS
MAIN JAVASCRIPT
===================================== */

/* =====================================
HEADER
===================================== */

const header =
document.getElementById("header");

const navbar =
document.getElementById("navbar");

window.addEventListener(
"scroll",
() => {

```
    if (window.scrollY > 30) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}
```

);

/* =====================================
MOBILE NAVIGATION
===================================== */

const navLinks =
document.querySelectorAll(
".navbar a"
);

/*
Mobile navigation is controlled
by clicking the logo/cart area.
On mobile, the navigation opens
when the cart button is clicked
with a long-press style fallback.

Normal cart click opens the cart.
*/

/* =====================================
BIDDING CART
===================================== */

const cartButton =
document.getElementById(
"cartButton"
);

const cartDrawer =
document.getElementById(
"cartDrawer"
);

const cartOverlay =
document.getElementById(
"cartOverlay"
);

const cartClose =
document.getElementById(
"cartClose"
);

const cartBody =
document.getElementById(
"cartBody"
);

const cartCount =
document.getElementById(
"cartCount"
);

const cartFooter =
document.getElementById(
"cartFooter"
);

let biddingRequests =
JSON.parse(
localStorage.getItem(
"pkfyBiddingRequests"
)
) || [];

function saveBiddingRequests() {

```
localStorage.setItem(

    "pkfyBiddingRequests",

    JSON.stringify(
        biddingRequests
    )

);
```

}

/* =====================================
OPEN CART
===================================== */

function openCart() {

```
cartDrawer.classList.add(
    "active"
);

cartOverlay.classList.add(
    "active"
);

document.body.classList.add(
    "cart-open"
);

renderCart();
```

}

/* =====================================
CLOSE CART
===================================== */

function closeCart() {

```
cartDrawer.classList.remove(
    "active"
);

cartOverlay.classList.remove(
    "active"
);

document.body.classList.remove(
    "cart-open"
);
```

}

cartButton.addEventListener(
"click",
openCart
);

cartClose.addEventListener(
"click",
closeCart
);

cartOverlay.addEventListener(
"click",
closeCart
);

/* =====================================
UPDATE CART COUNT
===================================== */

function updateCartCount() {

```
cartCount.textContent =
    biddingRequests.length;


if (
    biddingRequests.length > 0
) {

    cartButton.classList.add(
        "has-items"
    );

} else {

    cartButton.classList.remove(
        "has-items"
    );

}
```

}

/* =====================================
RENDER CART
===================================== */

function renderCart() {

```
updateCartCount();


if (
    biddingRequests.length === 0
) {

    cartBody.innerHTML = `

        <div class="empty-cart">

            <i class="fa-solid fa-gavel"></i>

            <h3>
                No Bidding Requests Yet
            </h3>

            <p>
                Add an auction item you want
                PKFY Logistics to help you with.
            </p>

            <button
                class="btn btn-gold"
                id="emptyCartAdd">

                Request Auction Assistance

            </button>

        </div>

    `;


    cartFooter.style.display =
        "none";


    document
        .getElementById(
            "emptyCartAdd"
        )
        .addEventListener(
            "click",
            () => {

                closeCart();

                openBiddingModal();

            }
        );


    return;

}


cartFooter.style.display =
    "block";


cartBody.innerHTML =
    biddingRequests
    .map(
        (item, index) => `

            <div
                class="cart-item">

                <button
                    class="remove-item"
                    data-index="${index}"
                    aria-label="Remove item">

                    <i class="fa-solid fa-trash"></i>

                </button>


                <h3>
                    ${escapeHTML(
                        item.itemName
                    )}
                </h3>


                <p>

                    <strong>
                        Auction:
                    </strong>

                    ${escapeHTML(
                        item.auctionName
                    )}

                </p>


                ${
                    item.itemLink
                    ?
                    `

                    <p>

                        <strong>
                            Item Link:
                        </strong>

                        <a
                            href="${escapeAttribute(
                                item.itemLink
                            )}"
                            target="_blank"
                            rel="noopener"
                            style="color:#b8860b;">

                            View Item

                        </a>

                    </p>

                    `
                    :
                    ""
                }


                <p>

                    <strong>
                        Maximum Bid:
                    </strong>

                    $${Number(
                        item.maxBid
                    ).toFixed(2)}

                </p>


                <p>

                    <strong>
                        Quantity:
                    </strong>

                    ${item.quantity}

                </p>


                ${
                    item.details
                    ?
                    `

                    <p>

                        <strong>
                            Details:
                        </strong>

                        ${escapeHTML(
                            item.details
                        )}

                    </p>

                    `
                    :
                    ""
                }


                <p>

                    <strong>
                        Status:
                    </strong>

                    Request Saved

                </p>

            </div>

        `
    )
    .join("");


document
    .querySelectorAll(
        ".remove-item"
    )
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    const index =
                        Number(
                            button.dataset.index
                        );


                    biddingRequests.splice(
                        index,
                        1
                    );


                    saveBiddingRequests();

                    renderCart();

                }
            );

        }
    );
```

}

/* =====================================
SAFE HTML
===================================== */

function escapeHTML(
value
) {

```
return String(value)
    .replace(
        /[&<>"']/g,
        character => ({

            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"

        })[character]
    );
```

}

function escapeAttribute(
value
) {

```
return String(value)
    .replace(
        /"/g,
        "&quot;"
    );
```

}

/* =====================================
BIDDING MODAL
===================================== */

const biddingModal =
document.getElementById(
"biddingModal"
);

const openBiddingForm =
document.getElementById(
"openBiddingForm"
);

const modalClose =
document.getElementById(
"modalClose"
);

const biddingForm =
document.getElementById(
"biddingForm"
);

function openBiddingModal() {

```
biddingModal.classList.add(
    "active"
);

document.body.classList.add(
    "modal-open"
);
```

}

function closeBiddingModal() {

```
biddingModal.classList.remove(
    "active"
);

document.body.classList.remove(
    "modal-open"
);
```

}

openBiddingForm.addEventListener(
"click",
openBiddingModal
);

modalClose.addEventListener(
"click",
closeBiddingModal
);

biddingModal.addEventListener(
"click",
event => {

```
    if (
        event.target ===
        biddingModal
    ) {

        closeBiddingModal();

    }

}
```

);

/* =====================================
ADD BIDDING REQUEST
===================================== */

biddingForm.addEventListener(
"submit",
event => {

```
    event.preventDefault();


    const itemName =
        document
            .getElementById(
                "itemName"
            )
            .value
            .trim();


    const auctionName =
        document
            .getElementById(
                "auctionName"
            )
            .value
            .trim();


    const itemLink =
        document
            .getElementById(
                "itemLink"
            )
            .value
            .trim();


    const maxBid =
        document
            .getElementById(
                "maxBid"
            )
            .value;


    const quantity =
        document
            .getElementById(
                "itemQuantity"
            )
            .value || 1;


    const details =
        document
            .getElementById(
                "itemDetails"
            )
            .value
            .trim();


    const newRequest = {

        id:
            Date.now(),

        itemName:
            itemName,

        auctionName:
            auctionName,

        itemLink:
            itemLink,

        maxBid:
            maxBid,

        quantity:
            quantity,

        details:
            details,

        status:
            "Request Saved"

    };


    biddingRequests.push(
        newRequest
    );


    saveBiddingRequests();


    biddingForm.reset();


    document
        .getElementById(
            "itemQuantity"
        )
        .value = 1;


    closeBiddingModal();


    openCart();


    cartButton.classList.add(
        "has-items"
    );


}
```

);

/* =====================================
SUBMIT BIDDING REQUEST
===================================== */

const submitBiddingRequest =
document.getElementById(
"submitBiddingRequest"
);

submitBiddingRequest.addEventListener(
"click",
() => {

```
    if (
        biddingRequests.length === 0
    ) {

        alert(
            "Please add at least one bidding request first."
        );

        return;

    }


    /*
       For now this opens your existing
       Google Form.

       Later we can replace this with
       a complete backend submission
       system connected to Google Sheets
       or Firebase.
    */


    window.open(

        "https://forms.gle/nzZoX1SvR768UcBG8",

        "_blank"

    );

}
```

);

/* =====================================
TRACKING UI
===================================== */

const trackButton =
document.getElementById(
"trackButton"
);

const trackingNumber =
document.getElementById(
"trackingNumber"
);

const trackingResult =
document.getElementById(
"trackingResult"
);

trackButton.addEventListener(
"click",
() => {

```
    const number =
        trackingNumber
            .value
            .trim();


    trackingResult.style.display =
        "block";


    if (!number) {

        trackingResult.innerHTML =

            "Please enter your tracking number.";

        return;

    }


    trackingResult.innerHTML =

        `Tracking number
        <strong>${escapeHTML(
            number
        )}</strong>
        received. Live tracking will be
        available when the PKFY Logistics
        tracking system is connected.`;

}
```

);

/* =====================================
CLOSE MENUS WITH ESCAPE
===================================== */

document.addEventListener(
"keydown",
event => {

```
    if (
        event.key === "Escape"
    ) {

        closeCart();

        closeBiddingModal();

    }

}
```

);

/* =====================================
CURRENT YEAR
===================================== */

document.getElementById(
"year"
).textContent =
new Date().getFullYear();

/* =====================================
SCROLL REVEAL
===================================== */

const revealElements =
document.querySelectorAll(

```
    ".service-card, " +
    ".step, " +
    ".price-card, " +
    ".contact-card, " +
    ".founder-photo-frame, " +
    ".about-content"

);
```

const revealObserver =

```
new IntersectionObserver(

    entries => {

        entries.forEach(
            entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.style.opacity =
                        "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            }
        );

    },

    {

        threshold: 0.12

    }

);
```

revealElements.forEach(
element => {

```
    element.style.opacity =
        "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    revealObserver.observe(
        element
    );

}
```

);

/* =====================================
INITIAL CART LOAD
===================================== */

renderCart();
