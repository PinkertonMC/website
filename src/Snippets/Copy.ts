export default function copy(that: string) {
    /*let inp: any = document.createElement("input");
document.body.appendChild(inp);
inp.value = that;
inp.select();
document.execCommand("copy", false);
inp.remove();
navigator.clipboard.writeText(that)*/
    navigator.clipboard.writeText(that);
}