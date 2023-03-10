const owoify = require("owoify-js").default
exports.run = async (client, message, args, prefix) => {
	await message.channel.sendTyping()

	let phrase = args.join(" ")
	console.log(phrase)
	if (!phrase) return message.reply("**please enter a phrase**")
	let owophrase = owoify(phrase, "uvu")

	if (owophrase.length >= 4000) {
		message.reply(`Outcome must not be greater than 4000 characters. Please try again with a different text.`)
		return
	}

	message.channel.send(owophrase)
}
exports.name = "owoify"
exports.aliases = ["owoify"]
exports.description = ["Converts text into owo format"]
exports.usage = [`owoify The greatest glory in living lies not in never falling, but in rising every time we fall.`]
exports.category = ["fun"]
