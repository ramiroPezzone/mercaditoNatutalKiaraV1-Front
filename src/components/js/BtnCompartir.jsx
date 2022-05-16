import React from 'react'
import styles from '../css/BtnCompartir.module.css'
import Swal from 'sweetalert2'

const BtnCompartir = () => {

  const share = () => {
    let url = "https://mercadito-natutal-kiara-v1-front.vercel.app/"
    let shareObject = {
      title: "Mercadito Natural Kiara",
      text: "Mercadito Natural Kiara",
      url: url,
    }
    if (navigator.share) {
      navigator
        .share(shareObject)
        .then(() => console.log("Compartido exitosamente"))
        .catch(err => console.error(err))
    } else {
      navigator.clipboard.writeText(url)
        .then(() => console.log("texto copiado"))
        .catch(err => console.error(err))
      Swal.fire({
        title: 'Enlace copiado al portapapeles',
        icon: 'success',
        confirmButtonText: 'Aceptar',
        timer: 3000,
        timerProgressBar: true,
        confirmButtonColor: "rgba(160, 183, 141, 1);"
      })
    }
  }

  return (
    <div className={styles.containerBtnCompartir}>
      <div className={styles.btnCompartir} onClick={share} />
    </div>
  )
}

export default BtnCompartir