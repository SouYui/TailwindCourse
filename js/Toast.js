var toast = document.getElementById('btnSuccess');
var toastExample = document.getElementById('toast');

if(toast) {
    toast.addEventListener('click', () => {
        var toastElement = new bootstrap.Toast(toastExample);
        toastElement.show();
    })
}