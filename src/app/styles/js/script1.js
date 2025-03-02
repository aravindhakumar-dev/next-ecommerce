document.addEventListener("DOMContentLoaded", function () {
    const textPreview = document.getElementById("text-preview");
    const priceTop = document.getElementById("price-top");
    const priceBottom = document.getElementById("price-bottom");
    const sizeOptions = document.querySelectorAll(".sizeoptions .option");
    const fontOptions = document.querySelectorAll(".fontoption");
    const colorOptions = document.querySelectorAll(".color-circle");
    
    let selectedSize = {
        basePrice: 2750,
        letterPrice: 400,
        height: 10,
        width: 3
    }; // Default to Regular size

    let fontPrice = 0; // Default font price

    // Function to update text preview and calculate dimensions
    function updateTextPreview() {
        const inputText = document.getElementById("custom-text").value;
        textPreview.textContent = inputText;

        // Ensure max 3 lines
        const lines = inputText.split("\n");
        if (lines.length > 3) {
            alert("Only 3 lines are allowed.");
            return false;
        }

        // Calculate total width and height based on the text length and selected size
        const textLength = inputText.replace(/\s+/g, '').length; // Removing whitespace
        const totalWidth = textLength * selectedSize.width;
        const totalHeight = selectedSize.height;

        // Update size display dynamically
        document.getElementById("regular-size").textContent = `Width: ${textLength * 3}"`;
        document.getElementById("regular-height").textContent = `Height: 10"`;

        document.getElementById("medium-size").textContent = `Width: ${textLength * 4}"`;
        document.getElementById("medium-height").textContent = `Height: 13"`;

        document.getElementById("large-size").textContent = `Width: ${textLength * 5}"`;
        document.getElementById("large-height").textContent = `Height: 15"`;

        updateTotalPrice(textLength);
    }

    // Function to update total price based on text length, size, and font
    function updateTotalPrice(textLength) {
        const totalPrice = selectedSize.basePrice + fontPrice + (selectedSize.letterPrice * textLength);
        priceTop.textContent = `₹${totalPrice}`;
        priceBottom.textContent = `₹${totalPrice}`;
    }

    // Add event listeners for text input and size selection
    document.getElementById("custom-text").addEventListener("input", updateTextPreview);

    sizeOptions.forEach(option => {
        option.addEventListener("click", function () {
            sizeOptions.forEach(opt => opt.classList.remove("active"));
            this.classList.add("active");

            selectedSize = {
                basePrice: parseInt(this.getAttribute("data-base-price")),
                letterPrice: parseInt(this.getAttribute("data-letter-price")),
                height: parseInt(this.getAttribute("data-height")),
                width: parseInt(this.getAttribute("data-width"))
            };

            updateTextPreview(); // Update dimensions and price after selecting a size
        });
    });

    // Add event listeners for font selection
    fontOptions.forEach(option => {
        option.addEventListener("click", function () {
            fontOptions.forEach(opt => opt.classList.remove("active"));
            this.classList.add("active");

            // Update font style in the preview
            const selectedFont = this.getAttribute("data-font");
            textPreview.style.fontFamily = selectedFont;

            // Update font price
            fontPrice = parseInt(this.getAttribute("data-price"));

            updateTextPreview(); // Recalculate the price including the font price
        });
    });

    // Add event listeners for color selection
    colorOptions.forEach(circle => {
        circle.addEventListener("click", function () {
            colorOptions.forEach(opt => opt.classList.remove("active"));
            this.classList.add("active");

            // Update color in the text preview
            const selectedColor = this.getAttribute("data-color");
            textPreview.style.color = selectedColor;
        });
    });

    // Initialize with default size selected
    document.querySelector(".sizeoptions .option").click();
});


// Select the main background image and all thumbnail elements
const mainBgImage = document.getElementById("main-bg-image");
const thumbnails = document.querySelectorAll(".thumbnail");

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    // Update the main background image source based on clicked thumbnail
    const newImageSrc = thumbnail.getAttribute("data-image");
    mainBgImage.src = newImageSrc;
  });
});
