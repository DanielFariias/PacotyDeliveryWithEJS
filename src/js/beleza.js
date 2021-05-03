const phoneBook = document.querySelector('.PhoneBook')

const beleza = [
	{
		title: "Barbearia Sr. Viller",
		link: "https://api.whatsapp.com/send?phone=5585992374476"
	},
	{
		title: "Barbearia Bruno Lima",
		link: "https://api.whatsapp.com/send?phone=5585986848126"
	},
	{
		title: "Bronze da Serra",
		link: "https://api.whatsapp.com/send?phone=5585991166452"
	},
	{
		title: "Espaço de Beleza Vitória",
		link: "https://api.whatsapp.com/send?phone=5585988346647"
	},
	{
		title: "Carla Andrade Cortes",
		link: "https://api.whatsapp.com/send?phone=5585986359156"
	},
	{
		title: "Espaço Atila Araújo",
		link: "https://api.whatsapp.com/send?phone=5585987214250"
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