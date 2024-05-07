let output = document.getElementById('output');
let buttons = document.getElementsByClassName('tool--btn');

for (let btn of buttons) {
    btn.addEventListener('click', () => {
        let cmd = btn.dataset['command'];
        if (cmd === 'createLink') {
            let url = prompt("Informe o Link aqui: ", "http:\/\/");
            document.execCommand(cmd, false, url);
        } else {
            document.execCommand(cmd, false, null);
        }
    })
}