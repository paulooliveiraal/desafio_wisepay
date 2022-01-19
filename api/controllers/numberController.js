module.exports = () => {
    const controller = {};

    controller.soma = (req, res) => {
        let n = req.query.n;

        // Validação para ver se tem string no meio
        n.split('').forEach((char, i) => {
            let isInteger = parseInt(char).toString() === char.toString();
            if(!isInteger) {
                return res.status(400).json({ result: 'Entrada de dados inválida. Todos os caracteres devem ser um número inteiro.' })
            }
        });
        // somar os numeros

        const resultado = n.split('').reduce((a,b) => parseInt(a)+parseInt(b));
        return res.status(200).json({ result: resultado })
    }

    return controller;
}