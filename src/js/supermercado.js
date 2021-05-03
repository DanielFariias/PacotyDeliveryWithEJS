const phoneBook = document.querySelector('.PhoneBook')

const supermercado = [
	{
		title: "Daniel da Verdura",
		link: "https://api.whatsapp.com/send?phone=5585985757926"
	},
	{
		title: "Comercial o Mardonio",
		link: "https://api.whatsapp.com/send?phone=5585986851709"
	},
	{
		title: "Comercial o Flávio",
		link: "https://api.whatsapp.com/send?phone=5585986850197"
	},
	{
		title: "Mercantil Serra Nossa",
		link: "https://api.whatsapp.com/send?phone=5585992862898"
	},
	{
		title: "Verduras e Frutas",
		link: "https://api.whatsapp.com/send?phone=5585986027738"
	},
	{
		title: "Comercial Bom de Preço",
		link: "https://api.whatsapp.com/send?phone=5585985152260"
	},
	{
		title: "Mercantil Super Compras",
		link: "https://api.whatsapp.com/send?phone=5585986082216"
	},
	{
		title: "Frigorifico Silvestre",
		link: "https://api.whatsapp.com/send?phone=5585997983010"
	},
	{
		title: "Frigorifico Pai e Filhos",
		link: "https://api.whatsapp.com/send?phone=5585988033012"
	},
	{
		title: "Daniel da Verdura",
		link: "https://api.whatsapp.com/send?phone=5585985757926"
	},
	{
		title: "Los Manos Produtos de Limpeza",
		link: "https://api.whatsapp.com/send?phone=5585999697378"
	},
	{
		title: "Frigorifico Carlinhos Castelo",
		link: "https://api.whatsapp.com/send?phone=5585991715956"
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

phoneBook.innerHTML += supermercado.map((user) => {
    return contact(user)
    }
).join('')