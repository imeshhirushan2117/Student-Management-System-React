import Swal from 'sweetalert2';

export function AlertComponent(icon, title, text) {
  Swal.fire({
    icon: icon,
    title: title,
    text: text,
    footer: '<a href="#">Why do I have this issue?</a>'
  });
}
