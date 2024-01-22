import React from 'react';
import Swal from 'sweetalert2';

export default function AlertComponent({ icon, title, text }) {
  Swal.fire({
    icon: icon,
    title: title,
    text: text,
    footer: '<a href="#">Why do I have this issue?</a>'
  });

  return <></>;
}
