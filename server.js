const express = require('express')

const app = express()
app.set("view engine", "ejs")

app.use(express.static(__dirname + '/public'));

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

const restaurante = [
	{
		title: "Divino Sabor",
		link: "https://api.whatsapp.com/send?phone=5585988679493"
	},
	{
		title: "Soumi Casa de Sushi",
		link: "https://api.whatsapp.com/send?phone=5585991790222"
	},
	{
		title: "Salgadinhos da Osana",
		link: "https://api.whatsapp.com/send?phone=5585989915303"
	},
	{
		title: "Tempero Portugês",
		link: "https://api.whatsapp.com/send?phone=5585996585872"
	},
	{
		title: "Família Doce",
		link: "https://api.whatsapp.com/send?phone=5585989913610"
	},
	{
		title: "Praça Gourmet",
		link: "https://api.whatsapp.com/send?phone=5585987595577"
	},
	{
		title: "Panificadora Pacoti",
		link: "https://api.whatsapp.com/send?phone=5585988378914"
	},
	{
		title: "Lourenço Gourmet",
		link: "https://api.whatsapp.com/send?phone=5585996814003"
	},
	{
		title: "Space Burguer",
		link: "https://api.whatsapp.com/send?phone=5585985020327"
	},
	{
		title: "Mineiro Casa de Amigos",
		link: "https://api.whatsapp.com/send?phone=5585988188003"
	},
	{
		title: "Baião Gostoso",
		link: "https://api.whatsapp.com/send?phone=5585988545767"
	},
	{
		title: "Delivery da Gil",
		link: "https://api.whatsapp.com/send?phone=5585988598735"
	},
	{
		title: "Doces e Sabores",
		link: "https://api.whatsapp.com/send?phone=5585984185796"
	},
	{
		title: "Nobre Lanches",
		link: "https://api.whatsapp.com/send?phone=5585988368988"
	},
]

const moda = [
	{
		title: "Gn Modas",
		link: "https://api.whatsapp.com/send?phone=5585996026888"
	},
	{
		title: "Belíssima",
		link: "https://api.whatsapp.com/send?phone=5585986437549"
	},
	{
		title: "Ateliê da Moda",
		link: "https://api.whatsapp.com/send?phone=5585989403478"
	},
	{
		title: "Galerie",
		link: "https://api.whatsapp.com/send?phone=5585989045858"
	},
	{
		title: "Maciço Imports",
		link: "https://api.whatsapp.com/send?phone=5585997491480"
	},
	{
		title: "Bebê Cheiroso",
		link: "https://api.whatsapp.com/send?phone=5585988197186"
	},
	{
		title: "Bem Calçado",
		link: "https://api.whatsapp.com/send?phone=5585986950009"
	},
	{
		title: "Boutique Serrana",
		link: "https://api.whatsapp.com/send?phone=5585988523434"
	},
	{
		title: "Estilo Mulher",
		link: "https://api.whatsapp.com/send?phone=5585985367274"
	},
	{
		title: "Fafá Modas",
		link: "https://api.whatsapp.com/send?phone=5585988645818"
	},
	{
		title: "Criança Feliz",
		link: "https://api.whatsapp.com/send?phone=5585988686585"
	},
]

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

const variedades = [
	{
		title: "Pacoti Variedades",
		link: "https://api.whatsapp.com/send?phone=5585992310902"
	},
	{
		title: "Moto Peças Pacoti",
		link: "https://api.whatsapp.com/send?phone=5585989438944"
	},
	{
		title: "Agromace",
		link: "https://api.whatsapp.com/send?phone=5585987214607"
	},
	{
		title: "Armazém Serrano",
		link: "https://api.whatsapp.com/send?phone=5585989370455"
	},
	{
		title: "Casa Peixoto",
		link: "https://api.whatsapp.com/send?phone=5585988440083"
	},
	{
		title: "MB Acessórios",
		link: "https://api.whatsapp.com/send?phone=5585992754568"
	},
	{
		title: "Paty Variedades",
		link: "https://api.whatsapp.com/send?phone=5585986841897"
	},
	{
		title: "Andrade Tintas",
		link: "https://api.whatsapp.com/send?phone=5585988015709"
	},
	{
		title: "Deposito Netinho",
		link: "https://api.whatsapp.com/send?phone=5585988001929"
	},
	{
		title: "BS KIDS",
		link: "https://api.whatsapp.com/send?phone=5585996364197"
	},
	{
		title: "Casa Uchôa",
		link: "https://api.whatsapp.com/send?phone=5585989157788"
	},
	{
		title: "Raimundinha Variedades",
		link: "https://api.whatsapp.com/send?phone=5585988550044"
	},
]

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

app.get("/", function(req, res) {
    res.render("pages/index", {
        contacts: saude,
    })
})

app.get("/restaurante", function(req, res) {
    res.render("pages/restaurantes", {
        contacts: restaurante,
    })
})

app.get("/moda", function(req, res) {
    res.render("pages/moda", {
        contacts: moda,
    })
})

app.get("/beleza", function(req, res) {
    res.render("pages/beleza", {
        contacts: beleza,
    })
})

app.get("/variedades", function(req, res) {
    res.render("pages/variedades", {
        contacts: variedades,
    })
})

app.get("/supermercado", function(req, res) {
    res.render("pages/supermercado", {
        contacts: supermercado,
    })
})

app.listen(8080)
console.log(">> Server Started")