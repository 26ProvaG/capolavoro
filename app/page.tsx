import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckIcon, GlobeIcon, CalendarDaysIcon, SearchIcon, QrCodeIcon, LifeBuoyIcon, PhoneIcon,GiftIcon } from "lucide-react"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-gray-50 text-gray-800">
      {/* Header (optional, but good for branding) */}
      <header className="px-4 lg:px-6 h-14 flex items-center bg-white shadow-sm">
        <Link href="#" className="flex items-center justify-center font-bold text-lg text-gray-900">
          Digital Agent
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#servizi" className="text-sm font-medium hover:underline underline-offset-4 text-gray-700">
            Servizi
          </Link>
          <Link href="#pacchetti" className="text-sm font-medium hover:underline underline-offset-4 text-gray-700">
            Pacchetti
          </Link>
          <Link href="#contatti" className="text-sm font-medium hover:underline underline-offset-4 text-gray-700">
            Contatti
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-gray-100 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
              <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-gray-900">
                    Digitalizza il tuo business, semplifica la tua vita.
                  </h1>
                  <p className="max-w-[700px] text-gray-600 md:text-xl mx-auto lg:mx-0">
                    {
                      "Aiuto attività locali, organizzazioni e negozi a crescere online, attirare nuovi clienti e gestire tutto in modo più semplice grazie a strumenti digitali su misura."
                    }
                  </p>
                </div>
                <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center lg:justify-start">
                  <Link href="#servizi">
                    <Button className="inline-flex h-12 items-center justify-center rounded-md bg-gray-900 px-8 text-base font-medium text-white shadow transition-colors hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                      Scopri i servizi
                    </Button>
                  </Link>
                </div>
              </div>
              <Image
                src="/Agent.jpg"
                width="550"
                height="550"
                alt="Digital Transformation"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servizi" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                  I miei servizi digitali per te
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Soluzioni concrete per portare la tua attività al livello successivo.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 xl:grid-cols-5">
              <Card className="flex flex-col items-center p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <GlobeIcon className="h-10 w-10 text-gray-700 mb-4" />
                <CardTitle className="text-lg font-semibold mb-2">Sito Web Professionale</CardTitle>
                <CardContent className="text-sm text-gray-600 p-0">
                  {"Una vetrina online moderna, chiara e personalizzata, visibile da ogni dispositivo."}
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <CalendarDaysIcon className="h-10 w-10 text-gray-700 mb-4" />
                <CardTitle className="text-lg font-semibold mb-2">Sistema di Prenotazione</CardTitle>
                <CardContent className="text-sm text-gray-600 p-0">
                  {"Gestisci appuntamenti in modo ordinato e automatico, senza carta e penna."}
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <SearchIcon className="h-10 w-10 text-gray-700 mb-4" />
                <CardTitle className="text-lg font-semibold mb-2">Ottimizzazione Google</CardTitle>
                <CardContent className="text-sm text-gray-600 p-0">
                  {"Ti faccio trovare facilmente su Google Search e Maps, dove i tuoi clienti ti cercano."}
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <QrCodeIcon className="h-10 w-10 text-gray-700 mb-4" />
                <CardTitle className="text-lg font-semibold mb-2">QR per Recensioni</CardTitle>
                <CardContent className="text-sm text-gray-600 p-0">
                  {"Raccogli più recensioni con un QR code che guida il cliente a lasciare feedback in pochi secondi."}
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <LifeBuoyIcon className="h-10 w-10 text-gray-700 mb-4" />
                <CardTitle className="text-lg font-semibold mb-2">Supporto Dedicato</CardTitle>
                <CardContent className="text-sm text-gray-600 p-0">
                  {"Ti seguo passo dopo passo, anche dopo la consegna, con assistenza personalizzata."}
                </CardContent>
              </Card>

               <Card className="flex flex-col items-center p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <GiftIcon className="h-10 w-10 text-gray-700 mb-4" />
                <CardTitle className="text-lg font-semibold mb-2">Sistema di Royalties</CardTitle>
                <CardContent className="text-sm text-gray-600 p-0">
                  {"Un sistema per creare e consolidare la fidelity del cliente, potente e persuasivo"}
                </CardContent>
              </Card>

            </div>
          </div>
        </section>

        {/* Service Packages Section */}
        <section id="pacchetti" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                  Scegli il pacchetto perfetto per te
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Soluzioni flessibili per ogni esigenza e budget.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {/* Base Package */}
              <Card className="flex flex-col justify-between p-6 shadow-lg border border-gray-200 h-full">
                <CardHeader className="pb-4 text-center">
                  <CardTitle className="text-2xl font-bold text-gray-900">Pacchetto Base</CardTitle>
                  <p className="text-gray-500">Per iniziare la tua presenza online.</p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col items-center">
                  <ul className="space-y-3 text-left text-gray-700 mb-8">
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                      Sito Web Vetrina One-Page
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                      Ottimizzazione Google My Business
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                      Supporto via  Whatsapp o Email
                    </li>
                  </ul>
                  <Button className="w-full bg-gray-900 text-white hover:bg-gray-700">
                    <Link
                      href="#contatti"
                      className="flex items-center justify-center text-white text-base font-normal"
                    >
                      Contattami per Base
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Avanzato Package */}
              <Card className="flex flex-col justify-between p-6 shadow-lg border border-gray-200 bg-white relative h-full">
                <CardHeader className="pb-4 text-center">
                  <CardTitle className="text-2xl font-bold text-gray-900">Pacchetto Avanzato</CardTitle>
                  <p className="text-gray-500">Cresci e gestisci meglio la tua attività.</p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col items-center">
                  <ul className="space-y-3 text-left text-gray-700 mb-8">
                   
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                      Tutto il Pacchetto Base
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                      Sito Web Completo (fino a 5 pagine)
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                      Sistema di Prenotazione Online
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                      Ottimizzazione Google Avanzata
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                      {"Analytics base"}
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                      Supporto Prioritario
                    </li>
                  </ul>
                  <Button className="w-full bg-gray-900 text-white hover:bg-gray-700">
                    <Link
                      href="#contatti"
                      className="flex items-center justify-center text-white text-base font-normal"
                    >
                      Contattami per Avanzato
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Completo Package */}
              <Card className="flex flex-col justify-between p-6 shadow-lg border border-gray-200 h-full">
                <CardHeader className="pb-4 text-center">
                  <CardTitle className="text-2xl font-bold text-gray-900">Pacchetto Completo</CardTitle>
                  <p className="text-gray-500">La soluzione all-in-one per il successo digitale.</p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col items-center">
                  <ul className="space-y-3 text-left text-gray-700 mb-8">
                  <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                      Tutto il Pacchetto Avanzato
                    </li>
                    
    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                     Sistema di Raccolta Punti con dashboard cliente
                    </li>

                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                      Sito Web Personalizzato Illimitato
                    </li>

  
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                      “Catalogo premi” personalizzato
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                      Campagna Email “Riattiva Clienti” (su richiesta)
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                      Consulenza Strategica Mensile
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                      Supporto 24/7
                    </li>
                  </ul>
                  <Button className="w-full bg-gray-900 text-white hover:bg-gray-700">
                    <Link
                      href="#contatti"
                      className="flex items-center justify-center text-white text-base font-normal"
                    >
                      Contattami per Completo
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* WhatsApp Contact Banner */}
        <section id="contatti" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white">
          <div className="container px-4 md:px-6 text-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {"Vuoi vedere una demo o hai dei dubbi?"}
              </h2>
              <p className="max-w-[800px] mx-auto text-gray-300 md:text-xl/relaxed py-4">
                {"Ti mostro come possiamo trasformare digitalmente la tua attività, senza impegno."}
              </p>
              <Link href="https://wa.me/3773844243" target="_blank" rel="noopener noreferrer">
                <Button className="inline-flex h-14 items-center justify-center rounded-md bg-green-500 px-10 text-lg font-medium text-white shadow-lg transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2">
                  <PhoneIcon className="h-6 w-6 mr-3" />
                  Scrivimi su WhatsApp
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white text-gray-600">
        <p className="text-xs">&copy; {new Date().getFullYear()} Digital Agent. Tutti i diritti riservati.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Termini di Servizio
          </Link>
        </nav>
      </footer>
    </div>
  )
}
