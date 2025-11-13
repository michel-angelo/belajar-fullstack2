const menuDewa = [
    {
        nama: "Zeus Thuderbrew",
        deskripsi: "A strong espresso that explodes on the tongue like lightning from the ruler of Olympus. Made for those who want to rise with divine power.",
        tipe: "Coffee"
    },

    {
        nama: "Aphrodite's Velvet Latte",
        deskripsi: "A smooth latte with a hint of vanilla and rose petals, tempting every sense like the charm of the goddess of love.",
        tipe: 'Coffee'
    },

    {
        nama: "Poseidon's Flame-Grilled Feast",
        deskripsi: "A selection of grilled meat or seafood cooked over a sacred fire, seasoned with sea spices and served as if from the kitchen of the god of the sea.",
        tipe: "Main Course"
    },

    {
        nama: "Ambrossia Bliss",
        deskripsi: "A light and sweet honey and olive mousse, inspired by the food of the gods that gives immortality with every bite.",
        tipe: "Dessert"
    },

    {
        nama: "Hermes' Winged Bites",
        deskripsi: "Crispy crostini topped with cheese and roasted mushrooms, quickly served and ready to fly to your tongue like Hermes' wings.",
        tipe: "Appetizer"
    },

    {
        nama: "Hephaestus' Ember Fries",
        deskripsi: "French fries coated in smoky seasoning and mild chili, as if they came out of the forge of the blacksmith god.",
        tipe: "Side Food"
    }
]

const menuDewaList = document.getElementById("menu-dewa")

const tampilkanMenuDewa = () => {
    menuDewaList.innerHTML = "";
    let htmlContent = "";
    menuDewa.forEach((menu) => {
        htmlContent += `
        <div class="menu-card">
            <h3>${menu.nama}</h3>
            <p>${menu.deskripsi}</p>
            <h5>${menu.tipe}</h5>
            <button>Lihat Menu</button>
        </div>`;
    })

    menuDewaList.innerHTML = htmlContent
}

tampilkanMenuDewa()


// FUNCTION BUTTON CONTACT
const contactForm = document.getElementById("contact-form")
const customerName = document.getElementById("customerName");
const customerEmail = document.getElementById("customerEmail");
const tombolKirim = document.getElementById("rombolKirim");

const kirimBisikan = (event) => {
    event.preventDefault()

    const nama = customerName.value;
    const email = customerEmail.value;

    if(nama === "" ) {
        alert("isi namamu terlebih dahulu...")
    } else {
        alert(`Baiklah tuan ${nama}, bisikanmu akan kukirimkan ke Istana...`)
    }
}

contactForm.addEventListener("submit", kirimBisikan)