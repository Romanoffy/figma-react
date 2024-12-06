import styled from "styled-components";
import banner from "../assets/lojin.png"

export const Back = styled.div`
    margin: 0; /* Menghilangkan margin default */
    padding: 0; /* Menghilangkan padding default */
    background: url(${banner});
    background-size: cover; /* Menyesuaikan ukuran gambar agar menutupi seluruh halaman */
    background-position: center; /* Memposisikan gambar di tengah */
    background-repeat: no-repeat; /* Mencegah pengulangan gambar */ 
    justify-content: center; /* Pusatkan konten secara horizontal */
    align-items: center; /* Pusatkan konten secara vertikal */
`