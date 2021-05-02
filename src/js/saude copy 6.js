const phoneBook = document.querySelector('.PhoneBook')

const saude = [
	{
		title: "Pacoti Pharma",
		link: "https://api.whatsapp.com/send?phone=5585988679493"
	},
	{
		title: "Maciço Farma",
		link: "https://api.whatsapp.com/send?phone=5585997321340"
	},
	{
		title: "Farmácia Menor Preço",
		link: "https://api.whatsapp.com/send?phone=5585988681932"
	},
	{
		title: "Farmacia do Trabalhador",
		link: "https://api.whatsapp.com/send?phone=5585989469877"
	},
	{
		title: "Clínica Arcanjo",
		link: "https://api.whatsapp.com/send?phone=5585991560597"
	},
]

const contact = function(user) {
    return (
        `
            <div class="contact">
                <p>${user.title}</p>
                <button>
                    <a href="${user.link}">
                        <img src="../../public/Whatsapp.svg" alt="Whatsapp">
                    </a>
                </button>
            </div>
        `
    )
}

phoneBook.innerHTML += saude.map((user) => {
    return contact(user)
    }
).join('')