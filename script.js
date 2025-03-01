const imageMap = {
    jollibee: "images/preview_jollibee.png",
    mcdonalds: "images/preview_mcdonalds.png",
    kfc: "images/preview_kfc.png",
    chowking: "images/preview_chowking.png",
    manginasal: "images/preview_manginasal.png"
};

const textMap = {
    jollibee: "images/text_jollibee.png",
    mcdonalds: "images/text_mcdonalds.png",
    kfc: "images/text_kfc.png",
    chowking: "images/text_chowking.png",
    manginasal: "images/text_manginasal.png"
};

const descriptionMap = {
	jollibee: "Nestled in the heart of Batasan-San Mateo branch, our Jollibee branch welcomes customers with its bright, family-friendly atmosphere and the irresistible aroma of freshly cooked Chickenjoy. Our menu offers the all-time favorite crispy and juicy Chickenjoy, paired with flavorful gravy, Jolly Spaghetti with its signature sweet-style sauce, and the deliciously cheesy Jolly Hotdog. For burger lovers, our Yumburger and Champ deliver that signature Jollibee taste. Whether you're here for a solo meal or a group feast, our branch is always ready to serve you with a joyful dining experience.",
	mcdonalds: "Located along the busy Makati Avenue, our McDonald's branch is the go-to spot for quick and satisfying meals for professionals, students, and families alike. We serve the well-loved McCrispy Chicken Fillet, the crunchy and juicy McDo Fried Chicken, and the ever-popular Chicken McNuggets. Customers can also enjoy our world-famous Big Mac, Cheeseburger, and McSpaghetti, alongside our refreshing McFloat and creamy Sundae. Whether dining in or grabbing a quick bite through our 24-hour drive-thru, we’re here to serve you with fast and delicious meals any time of the day.",
	kfc: "Our Quezon Avenue branch stands as a go-to destination for those craving KFC’s signature fried chicken, made with Colonel Sanders' secret blend of 11 herbs and spices. Guests can enjoy our best-selling Original Recipe Chicken, the extra-crispy Hot & Crispy variant, and our satisfying Bucket Meals, perfect for sharing. Our menu also includes the famous Zinger burger, Twister wraps, and the rich, creamy mashed potatoes. Whether you're dining in, ordering for takeout, or getting a quick meal via our efficient drive-thru, we guarantee a satisfying, finger-lickin’ good experience every time.",
	chowking: "Located inside Robinsons Place Cebu, our Chowking branch offers a fusion of Chinese flavors and Filipino favorites. Our signature Chinese-style Fried Chicken is crispy, juicy, and best enjoyed with our savory pancit canton or Yang Chow fried rice. Customers also love our dim sum selections, including siomai and pork dumplings, as well as our famous Chunky Asado Siopao. To cool down, our branch serves the refreshing Halo-Halo, packed with sweet toppings and creamy ice. Whether you’re stopping by for a quick meal or a family gathering, we bring warm and hearty Chinese-style meals to your table.",
	manginasal: "Our SM Fairview branch is a haven for grilled chicken lovers, serving up smoky, tender, and flavorful Chicken Inasal marinated in special spices and grilled to perfection. Customers can enjoy our signature Paa (chicken leg) or Pecho (chicken breast) meals, always served with unlimited rice and a side of flavorful chicken oil for that extra burst of taste. We also offer a variety of Filipino favorites, including Pork BBQ, Bangus Sisig, and our sweet and creamy Halo-Halo. Whether you're dining in or ordering for takeout, we bring the rich, authentic flavors of home-style grilled meals to your plate."
}

const myModal = new bootstrap.Modal(document.getElementById('myModal'));
const closer = document.getElementById("closer");

document.querySelectorAll('.card').forEach(button => {
    button.addEventListener('click', function() {
		closer.style.bottom = "0%";
		
        const mode = this.getAttribute('data-mode');
        const modalTitle = document.querySelector('.modal-header').querySelector("img");
        const modalBody = document.getElementById('modalBody');
		let modalImage = document.getElementById("modalImage");
		const description = document.getElementById("description");

		if (mode && imageMap[mode] && textMap[mode]) {
            modalImage.src = imageMap[mode];
			description.innerHTML = descriptionMap[mode];
			modalTitle.setAttribute("src", textMap[mode]);
        }
    });
});

function closeModal() {
    var modal = document.getElementById("myModal");
    var modalInstance = bootstrap.Modal.getInstance(modal);
    if (modalInstance) {
        modalInstance.hide();
    }
	
    document.querySelectorAll('.modal-backdrop').forEach(backdrop => backdrop.remove());
    document.body.classList.remove('modal-open'); // Restore scrolling

	closer.style.bottom = "-30%";
}

document.addEventListener("hidden.bs.modal", function () {
    document.body.style.overflow = "auto";  
    document.body.style.paddingRight = "0";
});
