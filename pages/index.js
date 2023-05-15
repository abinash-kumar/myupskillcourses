import { Button } from '@mui/material';
import Link from 'next/link';

import SendIcon from '@mui/icons-material/Send';
import logo from '../public/upskill.png';
// import './App.css';
import BenefitList from '../components/BenefitList';
import InvoiceTable from '../components/InvoiceTable';

import banner1 from '@/public/assets/1.png';

import gym1 from '@/public/assets/gym1.png';
import gym2 from '../public/assets/gym2.png';
import gym3 from '../public/assets/gym3.png';
import gym4 from '../public/assets/gym4.png';
import gym5 from '../public/assets/gym5.png';
import gym6 from '../public/assets/gym6.png';
import gym7 from '../public/assets/gym7.png';
import gym8 from '../public/assets/gym8.png';


function Landing() {

  const imglist = [
    { head: 'जिम की शुरुआत करना चाहते है?', para: 'जिम दो तरह के होते हैं पहला जिम जो कार्डियो उपकरणों और वेट लिफ्टिंग आदि की सुविधाओं से युक्त होता है इसमें वजन कम करना, बॉडी बनाने आदि की ट्रेनिंग दी जाती है दूसरा फिटनेस सेंटर जिसमे वजन घटाना, वजन बढ़ाना, योगा, एरोबिक्स, मार्शल आर्ट, आसन आदि सिखाए जाते हैं फिटनेस सेंटर का बिजनेस जिम की तुलना में थोड़ा महंगा होता है जिम हो या फिटनेस सेंटर, दोनों के लिए विस्तृत ज्ञान और अनुभव जरुरी होता है', imageSrc: gym1 },
    { head: 'Gym के लिए स्थान का चयन', para: 'जिम या फिटनेस सेंटर के बिजनेस के लिए स्थान यानी जगह सबसे ज्यादा महत्वपूर्ण है ऐसा नहीं है कि आप इसे शहर के किसी प्राइम लोकेशन पर ही शुरु करें, आप इसे किसी गली में भी खोल सकते हैं, लेकिन यह जरुरी है कि वहां आने वालों के लिए पार्किंग की सुविधा जरुर हो आप इसे किसी भी फ्लोर पर शुरु कर सकते हैं एक अच्छा जिम खोलने के लिए 2000 से 2500 स्क्वायर फीट तक का प्लॉट जरुरी है बजट कम हो तो थोड़ा कम जगह भी चल सकता है इतना जगह तो जरुर होना चाहिए कि कम से कम 15 मशीन जरुर आ जाए', imageSrc: gym2 },
    { head: 'जिम का रजिस्ट्रेशन', para: 'नियमों के अनुसार जिम का रजिस्ट्रेशन स्माल स्केल इंडस्ट्री के तहत होता है इसके लिए जिले के उद्योग विभाग से फॉर्म प्राप्त कर सकते हैं फॉर्म में सभी नियमों का उल्लेख होता है इस फॉर्म के भरने के बाद आपको जिम चलाने का लाइसेंस प्राप्त हो जाता है शुरुआती दौर में उद्योग विभाग अस्थायी लाइसेंस देता है, बाद में आप स्थायी लाइसेंस के लिए भी आवेदन कर सकते हैं आजकल रजिस्ट्रेशन के लिए ऑनलाइन आवेदन की भी व्यवस्था है ऑनलाइन सुविधा से आप भागदौड़ से बच सकते हैं', imageSrc: gym3 },
    { head: 'gym opening kaise kere', para: 'नेस सेंटर के बिजनेस के लिए स्थान यानी जगह सबसे ज्यादा महत्वपूर्ण है ऐसा नहीं है कि आप इसे शहर के किसी प्राइम लोकेशन पर ही शुरु करें, आप इसे किसी गली में भी खोल सकते हैं, लेकिन यह जरुरी है कि वहां आने वालों के लिए पार्किंग की सुविधा जरुर हो आप इसे किसी भी फ्लोर पर शुरु कर सकते हैं एक अच्छा जिम खोलने के लिए 2000 से 2500 स्क्वायर फीट तक का प्लॉट जरुरी है बजट कम हो तो थोड़ा कम जगह भी चल सकता है इतना जगह तो जरुर होना चाहिए कि कम से कम 15 मशीन जरुर आ जाए', imageSrc: gym2 },
    { head: 'जिम का रजिस्ट्रेशन', para: 'नियमों के अनुसार जिम का रजिस्ट्रेशन स्माल स्केल इंडस्ट्री के तहत होता है इसके लिए जिले के उ', imageSrc: gym4 },
    { head: 'जिम खोलने के लिए जरूरी है ये मशीनें', para: 'उनमें ट्रेड मिल, बेंच प्रेस, लेग प्रेस, लैट पुल डाउन, बटर फ्लाई, पैक डेक, बेंच प्रेस, लेग प्रेस, केबल क्रॉस ओवर, डिप बार, प्रीचर बेंच, सिटअप बेंच, दो नॉर्मल बेंच, योगा मैट, स्किपिंग रोप, रॉड, डंबल, स्टैंड वगैरह आदि महत्वपूर्ण है इन मशीनों में सबसे महंगा ट्रेड मिल होता है ट्रेड मिल पर लोग दौड़ लगाते हैं बिजनेस के लिहाज से बेहतर ट्रेड मिल की कीमत लगभग 01 लाख रुपये होती है कम दाम वाले ट्रेड मिल घर के लिए ठीक होता है लेकिन बिजनेस के लिए नहीं', imageSrc: gym5 },
    { head: 'जिम का माहौल प्रेरणादायक रखें ', para: ' सिर्फ दीवारों पर motivational posters चिपका देने से काम नहीं चलेगा, आपको अपने जिम का माहौल भी motivational रखना ह2. आपके जिम का माहोल अगर Positive and motivational होगा तो जिम के सदस्य भी लम्बे समय तक आपके साथ टिके रहेेगे', imageSrc: gym6 },
    { head: 'जिम की मशीनें कहां से खरीदें?', para: 'कई बड़ी कंपनियां हैं तो जिम के लिए मशीनों का निर्माण करती हैं हर बड़े शहरों में ऐसे शोरुम मौजूद होते हैं, जहां जिम के लिए आधुनिक मशीनें बिकती है कई मशीनें आपका अपने यहां लोकल में बनवा सकते हैं मशीनें खरीदने के लिए इंटरनेट आपकी बड़ी मदद कर सकता है इंटरनेट की मदद से आप अलग अलग कंपनियों के मशीनों की जानकारी हासिल कर सकते हैं इससे आपको हर जगह के रेट भी मालूम हो जाएंगे और आप अपनी सुविधा के हिसाब से खरीद कर सकते हैं', imageSrc: gym7 },
    { head: 'जिम की फीस क्या रखे?', para: 'आम तौर पर जिम की फीस 1000 रुपये मासिक होती है अगर आपके जिम में 200 लोग भी नियमित तौर पर आते हैं तो आपको फीस से 2 लाख रुपये प्राप्त होते हैं छोटे मोटे खर्चों को निकाल दे तो आपको हर महीने 1 लाख रुपये आसानी से बच जाएंगे जब मशीनों का कॉस्ट निकल जाता है तो फिर आपकी ये आमदनी सीधे 1 लाख 40 हजार रुपये मासिक हो जाता है कोशिश हो कि 200 ग्राहकों की संख्या हमेशा मेंटेन रहे', imageSrc: gym8 }
  ];

  const benefitList = [
    { text: 'In-depth knowledge of the Indian gym market and target demographics.' },
    { text: 'Step-by-step guidance on setting up your gym, including legal compliance.' },
    { text: 'Business planning and financial management strategies.' },
    { text: 'Facility design and equipment selection insights.' },
    { text: 'Effective marketing and branding techniques for the Indian market.' },
    { text: 'Operational efficiency and staff management best practices.' },
    { text: 'Ongoing support, resources, and networking opportunities.' },
  ]

  return (
    <div className="App">
      <header className="App-header">
        <img src='/upskill.png' className="upskill-logo" alt="upskill-logo" />
      </header>
      <h1 style={{ color: 'red', fontSize: 30, with: '100%' }} >This website is under construction !!</h1>
      <h1 style={{ color: '#6c3ad3', fontSize: 20, with: '100%', border: '5px solid #6c3ad3', marginTop: 20, margin: 20, borderRadius: 5, padding: 10 }} >Your Complete Guide to Opening a Successful Gym in India!</h1>
      {/* <p style={{ marginLeft: 40, marginRight: 40 }}>
        <span style={{ textTransform: 'uppercase', fontWeight: 800 }}>Complete Workshop </span>
        <span style={{ textTransform: 'capitalize', fontWeight: 800 }}>Video &nbsp;</span>
        <span style={{ textTransform: 'lowercase', fontWeight: 300 }}>for how to open your own gym</span>
      </p> */}

      <p style={{ marginLeft: 20, marginRight: 20, fontSize: 35, fontWeight: 600, textTransform: 'capitalize' }}>
        <span style={{ color: '#6c3ad3' }}>gym</span> या <span style={{ color: '#6c3ad3' }}>fitness</span> सेंटर का बिजनेस कैसे शुरू करें?
      </p>
      <p style={{ textTransform: 'capitalize', fontWeight: 300 }}>
        <span style={{ color: '#6c3ad3' }}>Complete Knowledge</span> in just  <span style={{ color: '#6c3ad3' }}>45 Mins</span> Video
      </p>

      <div className="videoCardGym">
        <div style={{ width: '100%' }}>
          <img src='/assets/gym6.png' alt={'heading'} style={{ width: 'calc(100% - 0px)' }} />
          {/* <p>Are you passionate about fitness and dreaming of starting your own gym in India?</p> */}
          <p>Our comprehensive course is designed to equip you with the knowledge,
            strategies, and practical insights you need to turn your dream into a reality.
          </p>
          <a href="https://imjo.in/r7Eqpd"><Button className="animate-btn" variant="contained" style={{ backgroundColor: '#ffb601', color: '#fff', borderRadius: 40, textTransform: 'initial', padding: 10, fontWeight: 700, }} >
            Buy @499 now and save upto 1 lakh
          </Button></a>
        </div>
      </div>
      <hr style={{ width: '60%' }} />
      <p style={{ marginLeft: 40, marginRight: 40, fontSize: 25, fontWeight: 600, }}>
        <span style={{ color: '#6c3ad3' }}>What</span> you will <span style={{ color: '#6c3ad3' }}>Learn</span> from this course?
      </p>
      <p style={{ textTransform: 'capitalize', fontWeight: 300, width: '80%', margin: 'auto' }}>
        <span style={{ color: '#6c3ad3' }}> 7 Proven Steps</span> for Opening <span style={{ color: '#6c3ad3' }}>Successful Gym </span> in India!
      </p>
      <br />
      <div className="gym-card-container">
        {benefitList.map(({ text }, i) =>
          <BenefitList key={i} iconSrc={`/assets/check.png`} heading={text} paragraph={text} />
        )}
      </div>
      <div className="videoCardGym">
        <p>Buy this course now and get a complete checklist for opening a gym pdf along with all the trick to save money upto 1 lakh or more</p>
        <a href="https://imjo.in/r7Eqpd"><Button className="animate-btn" variant="contained" style={{ backgroundColor: '#ffb601', color: '#fff', borderRadius: 40, textTransform: 'initial', padding: 10, fontWeight: 700, }} >
          Buy @499 now and save upto 1 lakh
        </Button></a>
        <p style={{ textTransform: 'capitalize', fontWeight: 300 }}>
          <span style={{ color: '#ffb601' }}>here is How you can Save</span> upto  <span style={{ color: '#ffb601' }}>1 Lakh </span> or more
        </p>
        <InvoiceTable />
        <span style={{ fontSize: 8, marginTop: 16, textAlign: 'right', width: '100%', display: 'block' }}>*You can even save more</span>
      </div>
      <div style={{ textTransform: 'capitalize', fontWeight: 300, fontSize: 20 }}>
        <hr width="80%" />

        <p style={{ marginLeft: 40, marginRight: 40, fontSize: 25, fontWeight: 600, }}>
          <span style={{ color: '#6c3ad3' }}>How will this workshop help you?</span> in just <span style={{ color: '#6c3ad3' }}>45 Mins</span> Video
        </p>
        <h2 style={{ fontSize: 16, fontWeight: 400, color: 'red' }}>Your are going to invest more then lakhs of Rupees for opening a gym </h2>
        <img src="/assets/gym6.png" style={{ width: '80%', margin: 'auto' }} />
        <h5 style={{ color: 'red', width: '80%', margin: '20px auto', fontWeight: 400 }}>so buying this course @499 will going to help you by providing you Step-by-step guidance on setting up a gym and saving costs in the process.</h5>
      </div>
      <div className="videoCardGym" style={{ backgroundColor: 'transparent' }}>
        <a href="https://imjo.in/r7Eqpd"><Button className="animate-btn" variant="contained" style={{ backgroundColor: '#ffb601', color: '#fff', borderRadius: 40, textTransform: 'initial', padding: 10, fontWeight: 700, }} >
          Buy @499 now and save upto 1 lakh
        </Button></a>
      </div>
      <br />
      <br />
      <footer className="footer">This site is not a part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in ANY WAY. FACEBOOK is a trademark of Facebook Inc. If you have any questions, please feel free to get in touch using the "Contact Us" link provided above.</footer>

      <smal style={{ marginBottom: 50, display: 'block' }}>By clicking buy button, I have read and agree to Upskill <Link href="/refund_policy"> Refund Policy </Link> and <Link href="/privacy_policy">Privacy Policy</Link> </smal>
      <a href="https://imjo.in/r7Eqpd"><Button className="animate-btn" variant="contained" style={{ position: 'fixed', borderRadius: 10, width: '87%', margin: 'auto', bottom: 0, left: 0, right: 0, backgroundColor: '#ffb601', color: '#fff', borderRadius: 100, textTransform: 'initial', padding: 10, fontWeight: 700, }} >
        Buy @499 now and save upto 1 lakh
      </Button></a>
    </div>
  );
}

export default Landing;
