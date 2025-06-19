function FAQ() {
  try {
    const [openIndex, setOpenIndex] = React.useState(null);
    const { isVisible, observeElement } = useScrollAnimation();

    const faqs = [
      {
        question: 'Berapa lama waktu yang dibutuhkan untuk menyelesaikan proyek?',
        answer: 'Waktu penyelesaian proyek bervariasi tergantung kompleksitas. Website standar membutuhkan 4-6 minggu, sedangkan aplikasi kompleks dapat memakan waktu 3-6 bulan. Kami akan memberikan timeline detail saat konsultasi awal.'
      },
      {
        question: 'Bagaimana proses pengembangan yang Anda gunakan?',
        answer: 'Kami menggunakan metodologi agile dengan check-in rutin bersama klien. Proses kami meliputi tahap discovery, design, development, testing, dan launch dengan komunikasi berkelanjutan sepanjang proyek.'
      },
      {
        question: 'Apakah Anda menyediakan dukungan berkelanjutan?',
        answer: 'Ya! Kami menawarkan paket maintenance komprehensif termasuk update keamanan, monitoring performa, update konten, dan dukungan teknis untuk menjaga aset digital Anda tetap optimal.'
      },
      {
        question: 'Bisakah Anda bekerja dengan brand yang sudah ada?',
        answer: 'Tentu saja. Kami dapat bekerja dalam panduan brand yang sudah ada atau membantu mengembangkan identitas brand Anda. Tim kami menyesuaikan dengan kebutuhan Anda baik untuk rebranding lengkap atau konsistensi dengan aset yang ada.'
      },
      {
        question: 'Teknologi apa saja yang Anda kuasai?',
        answer: 'Kami mengkhususkan diri pada teknologi web modern termasuk React, Node.js, platform cloud, dan pengembangan mobile. Tim kami selalu mengikuti tren industri terbaru dan praktik terbaik.'
      },
      {
        question: 'Bagaimana cara komunikasi selama proyek berlangsung?',
        answer: 'Kami menggunakan kombinasi tools project management, video call rutin, dan client dashboard untuk memastikan transparansi komunikasi. Anda akan selalu mengetahui status proyek Anda.'
      }
    ];

    React.useEffect(() => {
      lucide.createIcons();
      const cleanup = observeElement('faq-section');
      return cleanup;
    }, [observeElement]);

    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };

    return React.createElement('section', {
      className: 'section-padding bg-gradient-to-b from-black/20 to-gray-900/30 px-4 sm:px-6',
      'data-name': 'faq',
      'data-file': 'components/FAQ.js'
    },
      React.createElement('div', {
        className: 'container mx-auto max-w-4xl'
      },
        React.createElement('div', {
          id: 'faq-section',
          className: `text-center mb-12 sm:mb-16 fade-in ${isVisible['faq-section'] ? 'visible' : ''}`
        },
          React.createElement('h2', {
            className: 'text-3xl sm:text-4xl md:text-5xl font-bold mb-4 gradient-text'
          }, 'Pertanyaan Umum'),
          React.createElement('p', {
            className: 'text-base sm:text-lg lg:text-xl text-gray-300 px-4'
          }, 'Dapatkan jawaban atas pertanyaan umum tentang layanan dan proses kami')
        ),

        React.createElement('div', {
          className: 'space-y-4 sm:space-y-6'
        },
          faqs.map((faq, index) =>
            React.createElement('div', {
              key: index,
              className: `glass-effect rounded-lg sm:rounded-xl overflow-hidden scale-in ${isVisible['faq-section'] ? 'visible' : ''}`,
              style: { transitionDelay: `${index * 100}ms` }
            },
              React.createElement('button', {
                onClick: () => toggleFAQ(index),
                className: 'w-full p-4 sm:p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors'
              },
                React.createElement('h3', {
                  className: 'font-semibold text-base sm:text-lg pr-4'
                }, faq.question),
                React.createElement('i', {
                  'data-lucide': openIndex === index ? 'chevron-up' : 'chevron-down',
                  className: 'w-5 h-5 sm:w-6 sm:h-6 text-purple-400 flex-shrink-0 transition-transform'
                })
              ),
              openIndex === index && React.createElement('div', {
                className: 'px-4 sm:px-6 pb-4 sm:pb-6 border-t border-gray-600'
              },
                React.createElement('p', {
                  className: 'text-sm sm:text-base text-gray-300 leading-relaxed pt-4'
                }, faq.answer)
              )
            )
          )
        )
      )
    );
  } catch (error) {
    console.error('FAQ component error:', error);
    reportError(error);
  }
}
