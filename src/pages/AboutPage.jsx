import { Section, SectionLabel, SectionTitle } from '../components/SharedUI'import { Link } from 'react-router-dom'import { motion } from 'framer-motion'import team from '../data/team'import { ArrowRight, Users, Building2, Target, Globe, Clock, Award, MapPin } from 'lucide-react'const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}const itemVariants = {
  hidden: { opacity: 0, y: 20 },(€Ù¥Í¥‰±”èì(€€€½Á…¥Ñäè€Ä°(€€€äè€À°(€€€ÑÉ…¹Í¥Ñ¥½¸èì‘ÕÉ…Ñ¥½¸è€À¸Ôô°(€ô°)õ½¹ÍĞÑ¥µ•±¥¹•Ù•¹ÑÌ€ôl(€ìå•…Èè€ÈÀÀà°Ñ¥Ñ±”è€½Õ¹‘•¥¸M…¸É…¹¥Í¼œ°‘•ÍÉ¥ÁÑ¥½¸è€¥ÉÍĞ‘•…±•È±¥•¹ÑÌ¸œô°(€ìå•…Èè€ÈÀÄÀ°Ñ¥Ñ±”è€¥ÉÍĞ•¼µ™•¹¥¹œÑ•¡¹½±½äœ°‘•ÍÉ¥ÁÑ¥½¸è€½È…ÕÑ¼‘•…±•ÉÌ¸œô°(€ìå•…Èè€ÈÀÄÈ°Ñ¥Ñ±”è€•¼µ™•¹¥¹œ€˜İ…±¬µ¥¸…ÑÑÉ¥‰ÕÑ¥½¸œ°‘•ÍÉ¥ÁÑ¥½¸è€1…Õ¹¡•¸œô°(€ìå•…Èè€ÈÀÄĞ°Ñ¥Ñ±”è€•¹äÁ…ÉÑ¹•Èµ½‘•°œ°‘•ÍÉ¥ÁÑ¥½¸è€%¹ÑÉ½‘Õ•¸œô°(€ìå•…Èè€ÈÀÄØ°Ñ¥Ñ±”è€M…±•Ñ¼€ÔÀÀ¬‘•…±•ÉÍ¡¥ÁÌœ°‘•ÍÉ¥ÁÑ¥½¸è€œœô°(€ìå•…Èè€ÈÀÄà°Ñ¥Ñ±”è€5Õ±Ñ¥Õ±ÑÕÉ…°µ…É­•Ñ¥¹œ‘¥Ù¥Í¥½¸œ°‘•ÍÉ¥ÁÑ¥½¸è€1…Õ¹¡•¸œô°(€ìå•…Èè€ÈÀÈÀ°Ñ¥Ñ±”è€áÁ…¹‘•‰•å½¹…ÕÑ¼œ°‘•ÍÉ¥ÁÑ¥½¸è€A°¥¹…¹”°!•…±Ñ¡…É”¸œô°(€ìå•…Èè€ÈÀÈÈ°Ñ¥Ñ±”è€½¹¹•Ñ•QX…¹¥¥Ñ…°== œ°‘•ÍÉ¥ÁÑ¥½¸è€‘‘•¸œô°(€ìå•…Èè€ÈÀÈĞ°Ñ¥Ñ±”è€1¥¹­=¹”…Ñ„Á±…Ñ™½É´œ°‘•ÍÉ¥ÁÑ¥½¸è€1…Õ¹¡•¸œô°(€ìå•…Èè€ÈÀÈÔ°Ñ¥Ñ±”è€$µ¥ÉÍĞ¥Í½Ù•Éä€¡<¤œ°‘•ÍÉ¥ÁÑ¥½¸è€½•Ì±¥Ù”¸œô°)u½¹ÍĞÍÑ…ÑÌ€ôl(€ì±…‰•°è€œÄÜ¬e…ÉÌœ°¥½¸è±½¬°Ù…±Õ”è€¥¸	ÕÍ¥¹•ÍÌœô°(€ì±…‰•°è€øÄ°ÀÀÀ•…±•ÉÍ¡¥ÁÌœ°¥½¸è	Õ¥±‘¥¹œÈ°Ù…±Õ”è€½¸A±…Ñ™½É´œô°(€ì±…‰•°è€œÈÕ4¬¹¹Õ…°Y½±Õµ”œ°¥½¸èQ…É•Ğ°Ù…±Õ”è€AÉ½•ÍÍ•œô°(€ì±…‰•°è€œÄÀÀ”¼µ=ÀI•½Ù•Éäœ°¥½¸èİ…É°Ù…±Õ”è€¡¥•Ù•œô°)u•áÁ½ÉĞ‘•™…Õ±Ğ™Õ¹Ñ¥½¸‰½ÕÑA…” ¤ì(€½¹ÍĞ•á•ÕÑ¥Ù•Ì€ôÑ•…´¹™¥±Ñ•È ¡µ•µ‰•È¤€ôøµ•µ‰•È¹Ñ¥•È€ôôô€•á•ÕÑ¥Ù”œ¤(€½¹ÍĞ½Ñ¡•ÉQ•…´€ôÑ•…´¹™¥±Ñ•È ¡µ•µ‰•È¤€ôøµ•µ‰•È¹Ñ¥•È€„ôô€•á•ÕÑ¥Ù”œ¤((€É•ÑÕÉ¸€ (€€€€ñ‘¥Ø±…ÍÍ9…µ”ô‰Üµ™Õ±°‰œµİ¡¥Ñ”ˆø(€€€€€ì¼¨!•É¼M•Ñ¥½¸€¨½ô(€€€€€€ñÍ•Ñ¥½¸±…ÍÍ9…µ”ô‰É•±…Ñ¥Ù”Üµ™Õ±°½Ù•É™±½Üµ¡¥‘‘•¸‰œµÉ…‘¥•¹ĞµÑ¼µ‰È™É½´µÍ±…Ñ”´äÀÀÑ¼µ‰±Õ”´äÀÀ¼ÈÀÁä´ÈĞÍ´éÁä´ÌÈˆø(€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ô‰µàµ…ÕÑ¼µ…àµÜ´Ùá°Áà´ĞÍ´éÁà´Ø±œéÁà´àˆø(€€€€€€€€€€ñµ½Ñ¥½¸¹‘¥Ø(€€€€€€€€€€€¥¹¥Ñ¥…°õíì½Á…¥Ñäè€À°äè€´ÈÀõô(€€€€€€€€€€€…¹¥µ…Ñ”õíì½Á…¥Ñäè€Ä°äè€Àõô(€€€€€€€€€€€ÑÉ…¹Í¥Ñ¥½¸õíì‘ÕÉ…Ñ¥½¸è€À¸Øõô(€€€€€€€€€€€±…ÍÍ9…µ”ô‰Ñ•áĞµ•¹Ñ•Èˆ(€€€€€€€€€€ø(€€€€€€€€€€€€ñ Ä±…ÍÍ9…µ”ô‰Ñ•áĞ´Õá°Í´éÑ•áĞ´Ùá°™½¹Ğµ‰½±Ñ•áĞµİ¡¥Ñ”µˆ´Øˆø(€€€€€€€€€€€€€=ÕÈMÑ½Éä(€€€€€€€€€€€€ğ½ Äø(€€€€€€€€€€€€ñÀ±…ÍÍ9…µ”ô‰Ñ•áĞµá°Ñ•áĞµÍ±…Ñ”´ÌÀÀµ…àµÜ´Éá°µàµ…ÕÑ¼ˆø(€€€€€€€€€€€€€	Õ¥±‘¥¹œÑ¡”¥¹™É…ÍÑÉÕÑÕÉ”™½È…ÕÑ½µ½Ñ¥Ù”…‘Ù•ÉÑ¥Í¥¹œ(€€€€€€€€€€€€ğ½Àø(€€€€€€€€€€ğ½µ½Ñ¥½¸¹‘¥Øø(€€€€€€€€ğ½‘¥Øø(€€€€€€ğ½Í•Ñ¥½¸ø((€€€€€ì¼¨½Õ¹‘¥¹œMÑ½ÉäM•Ñ¥½¸€¨½ô(€€€€€€ñM•Ñ¥½¸ø(€€€€€€€€ñµ½Ñ¥½¸¹‘¥Ø(€€€€€€€€€Ù…É¥…¹ÑÌõí½¹Ñ…¥¹•ÉY…É¥…¹ÑÍô(€€€€€€€€€¥¹¥Ñ¥…°ô‰¡¥‘‘•¸ˆ(€€€€€€€€€İ¡¥±•%¹Y¥•Üô‰Ù¥Í¥‰±”ˆ(€€€€€€€€€Ù¥•İÁ½ÉĞõíì½¹”èÑÉÕ”°…µ½Õ¹Ğè€À¸Ìõô(€€€€€€€€€±…ÍÍ9…µ”ô‰µ…àµÜ´Íá°µàµ…ÕÑ¼ˆ
          >
          <SectionLabel>Founded 2008</SectionLabel>
          <SectionTitle>The Beginning</SectionTitle>
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-700 leading-relaxed mb-6"
          >
            In 2008, Ray Bhatia and Mike Machado saw a gap in automotive advertising. Nobody was building the infrastructure underneath it â€” the data pipelines, attribution models, compliance engines. So they built it from the ground up in San Francisco.
          </motion.p>
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-700 leading-relaxed mb-6"
          >
            Not off-the-shelf tools repackaged, but proprietary technology purpose-built for the automotive dealer-OEM ecosystem. The result is LinkOne Data.
          </motion.p>
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-700 leading-relaxed"
         >
            Today, nearly 1,000 dealerships across North America run on the platform.
          </motion.p>
        </motion.div>
      </Section>

      {/* Timeline Section */}
      <Section>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>Our Journey</SectionLabel>
          <SectionTitle>Timeline</SectionTitle>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Timeline Visual */}
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-slate-300"></div>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="space-y-8"
              >
                {timelineEvents.map((event, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="relative pl-24"
                  >
                    <div className="absolute left-0 top-2 w-16 h-16 bg-gradient-to-br&from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {event.year}
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                      <h3 className="font-semibold text-slate-900 mb-1">
                        {event.title}
                      </h3>
                        {event.description && (
                          <p className="text-sm text-slate-600">{event.description}</p>
                        )}
                     </div>
                  </motion.div>
                  ))}
              </motion.div>
             </div>

            {/* Stats Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col justify-center"
            >
              <div className="space-y-6">
                {stats.map((stat, idx) => {
                  const IconComponent = stat.icon
                  return (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      className="flex items-start gap-4 p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg border border-slate-200 hover:border-blue-300 transition-colors"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-slate-900">
                          {stat.label}
                        </p>
                        <p className="text-sm text-slate-600 mt-1">{stat.value}</p>
                      </div>
                    </motion.div>
                  )
                  }}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </Section>

      {/* Team Section */}
      <Section>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>Our People</SectionLabel>
          <SectionTitle>Meet the Team</SectionTitle>

          {/* Executives */}
          { executives.length > 0 && (
            <div className="mb-16">
              <h3 className="text-xl font-semibold text-slate-900 mb-8">
                Leadership
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="grid md:grid-cols-3 gap-8"
              >
                {executives.map((member) => 
                  <motion.div
                    key={member.name}
                    variants={itemVariants}
                    className="group"
                  >
                    <div className="relative mb-4 overflow-hidden rounded-lg border-2 border-slate-200 group-hover:border-blue-400 transition-colors">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">
                      {member.name}
                    </h4>
                    <p className="text-sm text-slate-500">{bomber.title}</p>
                    </motion.div>
                ))}
              </motion.div>
            </div>
          )}

          {/* Rest of Team */}
          {otherTeam.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-8">
                Team
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {otherTeam.map((member) => (
                  <motion.div
                    key={member.name}
                    variants={itemVariants}
                    className="group"
                  >
                    <div className="relative mb-3 overflow-hidden rounded-lg border border-slate-200 group-hover:border-blue-400 transition-colors">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-0.5 text-sm">
                       {member.name}
                    </h4>
                    <p className="text-xs text-slate-500">{member.title}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          )}
        </motion.div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-blue-50 to-slate-50" >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Join Our Team
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            We're always looking for talented people who want to build the future of automotive advertising.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Work With Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </Section>
  </div>
  )
}
