//girdi değişkenleri
let urunTipi, urunSecimi, urunSayisi, urunTaksidi;

//çıktı değikenleri
let araToplam, odenecekToplamTutar, kargoUcreti=7;

//global döngü değişkeni
let i;

//global nesne değişkenleri
let liste, secenek;

//dizi tipindeki değişkenler
let erkekParfumleri=["Calvin Clain", 100, "Lacoste", 120, "Axe", 30, "First Class", 50];
let kadinParfumleri=["Burbary", 150, "Avon", 80, "She", 60, "Nina Ricci", 130];

function urunAdediDoldur()
{
    for(i=1;1<=10;i++)
    {
        secenek=document.createElement("option");
        liste=document.getElementById("urunAdedi");
        liste.options.add(secenek);
        secenek.text=i;
        secenek.value=i;
    }
}

function urunTaksidiDoldur()
{
    for(i=0;1<=12;i=i+3)
    {
        secenek=document.createElement("option");
        liste=document.getElementById("urunTaksidi");
        liste.options.add(secenek);
        secenek.text=i;
        secenek.value=i;
    }
}

function urunleriGetir()
{
    document.querySelectorAll('#urunListesi option').forEach(option => option.remove());

    liste=document.getElementsByName("urunTipi");

    for(i=0;i<liste.length;i++)
    {
        if(liste[i].checked)
        {
            urunTipi=liste[i].value;
        }
    }
    console.log(urunTipi);

    if(urunTipi=="E")
    {
        for(i=0;i<erkekParfumleri.length;i=i+2)
        {
            secenek=document.createElement("option");
            liste=document.getElementById("urunListesi");
            liste.options.add(secenek);
            secenek.text=erkekParfumleri[i];
            secenek.value=erkekParfumleri[i+1];
            
        }

    }
    else if(urunTipi=="K")
    {
        for(i=0;i<erkekParfumleri.length;i=i+2)
        {
            secenek=document.createElement("option");
            liste=document.getElementById("urunListesi");
            liste.options.add(secenek);
            secenek.text=kadinParfumleri[i];
            secenek.value=kadinParfumleri[i+1];
            
        }
    }
}

function hesapla()
{
    liste=document.getElementById("urunListesi");
    urunSecimi=liste[liste.selectedIndex].value;

    liste=document.getElementById("urunAdedi");
    urunAdedi=liste[liste.selectedIndex].value;

    liste=document.getElementById("urunTaksidi");
    urunTaksidi=liste[liste.selectedIndex].value;

    araToplam=urunSecimi*urunAdedi;

    if(urunTaksidi==3)
    {
        araToplam=araToplam*1.1;
    }
    else if(urunTaksidi==6)
    {
        araToplam=araToplam*1.2;
    }
    else if(urunTaksidi==9)
    {
        araToplam=araToplam*1.3;
    }
    else if(urunTaksidi==12)
    {
        araToplam=araToplam*1.4;
    }

    document.getElementById("txtAraToplam").value=araToplam.toFixed(2);
    document.getElementById("txtBirimFiyat").value=urunSecimi;

    if(araToplam<100)
    {
        document.getElementById("txtKargo").value=kargoUcreti;
        odenecekTutar=araToplam+kargoUcreti;
    }
    else if(araToplam>=100)
    {
        document.getElementById("txtKargo").value=0;
        odenecekTutar=araToplam;
    }

    document.getElementById("sonuc").innerHTML="Ödemeniz Gereken Toplam Tutarı(Vade farkı ve kargo dahil): "+odenecekTutar;
   
}