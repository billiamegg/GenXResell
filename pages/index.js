import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Home | VoiceCrackerClub</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to VoiceCrackerClub!!" />
        <p className="description">
          This website is bieng hosted by ryken kennedy.  i thought it would be fun to start some sort of group website and so I did.
        </p>
        <iframe src="https://tawk.to/chat/63bc9d8747425128790c8d39/1gmccelvi" />
    <!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/63bc9d8747425128790c8d39/1gmccelvi';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script-->
      </main>

      <Footer />
    </div>
  )
}
