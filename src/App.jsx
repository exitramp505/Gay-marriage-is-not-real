import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-[#fafaf9] text-[#1c1917]">
      {/* Clean minimal header */}
      <div className="max-w-2xl mx-auto px-6 pt-10 pb-8">
        <h1 className="text-3xl font-semibold tracking-tighter">Gay Marriage is not real</h1>
      </div>

      {/* Argument 1 */}
      <div id="arg-1" className="max-w-2xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-semibold tracking-tight mb-6">
          The State Does Not Need to Affirm Your Version of Love
        </h2>

        <div className="space-y-3 text-[15px]">
          <div className="flex justify-start">
            <div className="bg-[#f1f0ed] rounded-3xl rounded-bl-lg px-5 py-3.5 max-w-[82%]">
              Marriage is about two people who love each other making a commitment. The government should treat everyone the same.
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-[#3b2a6e] text-white rounded-3xl rounded-br-lg px-5 py-3.5 max-w-[82%]">
              The state never got into marriage to celebrate love. It got involved because only opposite-sex couples can create children without a third party. That is the reason marriage has always received special legal treatment.<sup className="text-[10px] text-[#57534e] ml-0.5">1</sup>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="bg-[#f1f0ed] rounded-3xl rounded-bl-lg px-5 py-3.5 max-w-[82%]">
              But that's not how people see marriage anymore. For most couples today it's about love and partnership, not kids.
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-[#3b2a6e] text-white rounded-3xl rounded-br-lg px-5 py-3.5 max-w-[82%]">
              What people feel privately doesn't change what the institution actually is. The government doesn't hand out legal privileges and tax benefits because two adults have strong feelings for each other. It does it to support the formation of stable families that produce the next generation.<sup className="text-[10px] text-[#57534e] ml-0.5">1</sup>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="bg-[#f1f0ed] rounded-3xl rounded-bl-lg px-5 py-3.5 max-w-[82%]">
              So gay couples who adopt or use surrogacy don't count?
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-[#3b2a6e] text-white rounded-3xl rounded-br-lg px-5 py-3.5 max-w-[82%]">
              Adoption and surrogacy just prove the point. Same-sex couples cannot create children on their own. Once you detach marriage from the actual thing it was built around, it stops being a coherent public institution.<sup className="text-[10px] text-[#57534e] ml-0.5">1</sup>
            </div>
          </div>
          <div className="flex justify-start pt-2">
            <div className="bg-[#f1f0ed] rounded-3xl rounded-bl-lg px-5 py-3.5 max-w-[82%]">
              You're just a bigot.
            </div>
          </div>

          {/* Next navigation */}
          <div className="flex justify-end mt-8">
            <button
              onClick={() => document.getElementById('arg-2').scrollIntoView({ behavior: 'smooth' })}
              className="text-sm text-[#3b2a6e] hover:underline flex items-center gap-1"
            >
              Next argument →
            </button>
          </div>
        </div>
      </div>

      {/* Argument 2 */}
      <div id="arg-2" className="max-w-2xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-semibold tracking-tight mb-6">
          Marriage Has a Real Definition
        </h2>

        <div className="space-y-3 text-[15px]">
          <div className="flex justify-start">
            <div className="bg-[#f1f0ed] rounded-3xl rounded-bl-lg px-5 py-3.5 max-w-[82%]">
              Marriage is just a social construct. Societies have changed it before and they can change it again.
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-[#3b2a6e] text-white rounded-3xl rounded-br-lg px-5 py-3.5 max-w-[82%]">
              Marriage has existed in every human society as the male-female union oriented toward reproduction. That isn't a social construct — it's the recognition of a biological reality.<sup className="text-[10px] text-[#57534e] ml-0.5">2</sup>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="bg-[#f1f0ed] rounded-3xl rounded-bl-lg px-5 py-3.5 max-w-[82%]">
              But we've already changed marriage with no-fault divorce and interracial marriage. This is no different.
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-[#3b2a6e] text-white rounded-3xl rounded-br-lg px-5 py-3.5 max-w-[82%]">
              Those changes didn't alter the fundamental definition. No-fault divorce made it easier to exit a marriage, but it didn't pretend two men or two women were the same as a husband and wife. This redefinition does.<sup className="text-[10px] text-[#57534e] ml-0.5">2</sup>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="bg-[#f1f0ed] rounded-3xl rounded-bl-lg px-5 py-3.5 max-w-[82%]">
              So what? Words and definitions change all the time.
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-[#3b2a6e] text-white rounded-3xl rounded-br-lg px-5 py-3.5 max-w-[82%]">
              Some words matter. If you can redefine marriage to include something it has never been, then the word no longer describes anything specific. It just means whatever activists want it to mean at the moment.<sup className="text-[10px] text-[#57534e] ml-0.5">2</sup>
            </div>
          </div>
          <div className="flex justify-start pt-2">
            <div className="bg-[#f1f0ed] rounded-3xl rounded-bl-lg px-5 py-3.5 max-w-[82%]">
              This is just homophobic.
            </div>
          </div>

          {/* Next navigation */}
          <div className="flex justify-end mt-8">
            <button
              onClick={() => document.getElementById('arg-3').scrollIntoView({ behavior: 'smooth' })}
              className="text-sm text-[#3b2a6e] hover:underline flex items-center gap-1"
            >
              Next argument →
            </button>
          </div>
        </div>
      </div>

      {/* Argument 3 */}
      <div id="arg-3" className="max-w-2xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-semibold tracking-tight mb-6">
          Children Need Mothers and Fathers
        </h2>

        <div className="space-y-3 text-[15px]">
          <div className="flex justify-start">
            <div className="bg-[#f1f0ed] rounded-3xl rounded-bl-lg px-5 py-3.5 max-w-[82%]">
              Kids do great with same-sex parents. The research shows no difference.
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-[#3b2a6e] text-white rounded-3xl rounded-br-lg px-5 py-3.5 max-w-[82%]">
              Most of that research is low-quality and short-term. Large-scale studies on father absence show real, consistent disadvantages for boys in particular — higher rates of behavioral problems, crime, and poor educational outcomes.<sup className="text-[10px] text-[#57534e] ml-0.5">3</sup>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="bg-[#f1f0ed] rounded-3xl rounded-bl-lg px-5 py-3.5 max-w-[82%]">
              That's just correlation. It doesn't prove anything about same-sex parenting.
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-[#3b2a6e] text-white rounded-3xl rounded-br-lg px-5 py-3.5 max-w-[82%]">
              We have decades of data showing that boys and girls benefit from both a mother and a father. Different sexes parent differently. Pretending they're interchangeable is ideology, not evidence.<sup className="text-[10px] text-[#57534e] ml-0.5">3</sup>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="bg-[#f1f0ed] rounded-3xl rounded-bl-lg px-5 py-3.5 max-w-[82%]">
              So you're saying gay people can't be good parents?
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-[#3b2a6e] text-white rounded-3xl rounded-br-lg px-5 py-3.5 max-w-[82%]">
              Some gay people are fine parents. The question is whether the state should pretend that two mothers or two fathers are the equivalent of a mother and father for the average child. The data suggests they are not.<sup className="text-[10px] text-[#57534e] ml-0.5">3</sup>
            </div>
          </div>
          <div className="flex justify-start pt-2">
            <div className="bg-[#f1f0ed] rounded-3xl rounded-bl-lg px-5 py-3.5 max-w-[82%]">
              You're a hateful bigot.
            </div>
          </div>

          {/* Next navigation */}
          <div className="flex justify-end mt-8">
            <button
              onClick={() => document.getElementById('arg-4').scrollIntoView({ behavior: 'smooth' })}
              className="text-sm text-[#3b2a6e] hover:underline flex items-center gap-1"
            >
              Next argument →
            </button>
          </div>
        </div>
      </div>

      {/* Argument 4 */}
      <div id="arg-4" className="max-w-2xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-semibold tracking-tight mb-6">
          Redefining Marriage Changes It for Everyone
        </h2>

        <div className="space-y-3 text-[15px]">
          <div className="flex justify-start">
            <div className="bg-[#f1f0ed] rounded-3xl rounded-bl-lg px-5 py-3.5 max-w-[82%]">
              This doesn't affect straight people at all. It's just about equality for gay couples.
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-[#3b2a6e] text-white rounded-3xl rounded-br-lg px-5 py-3.5 max-w-[82%]">
              Once marriage is redefined as the recognition of adult romantic feelings, the old understanding is officially replaced. Schools, laws, and culture now operate on the new definition.<sup className="text-[10px] text-[#57534e] ml-0.5">4</sup>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="bg-[#f1f0ed] rounded-3xl rounded-bl-lg px-5 py-3.5 max-w-[82%]">
              That sounds like a slippery slope argument.
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-[#3b2a6e] text-white rounded-3xl rounded-br-lg px-5 py-3.5 max-w-[82%]">
              It's not a slope. It's what actually happened. Marriage is now taught as a genderless emotional contract. The old idea that it has anything to do with male and female is treated as bigotry.<sup className="text-[10px] text-[#57534e] ml-0.5">4</sup>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="bg-[#f1f0ed] rounded-3xl rounded-bl-lg px-5 py-3.5 max-w-[82%]">
              So what? Times change.
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-[#3b2a6e] text-white rounded-3xl rounded-br-lg px-5 py-3.5 max-w-[82%]">
              The change wasn't neutral. It required the state and institutions to actively suppress the previous understanding of marriage. Religious schools, adoption agencies, and even parents have faced pressure or punishment for holding the old view.<sup className="text-[10px] text-[#57534e] ml-0.5">4</sup>
            </div>
          </div>
          <div className="flex justify-start pt-2">
            <div className="bg-[#f1f0ed] rounded-3xl rounded-bl-lg px-5 py-3.5 max-w-[82%]">
              This is just your religious bigotry talking.
            </div>
          </div>

          {/* Next navigation */}
          <div className="flex justify-end mt-8">
            <button
              onClick={() => document.getElementById('arg-5').scrollIntoView({ behavior: 'smooth' })}
              className="text-sm text-[#3b2a6e] hover:underline flex items-center gap-1"
            >
              Next argument →
            </button>
          </div>
        </div>
      </div>

      {/* Argument 5 */}
      <div id="arg-5" className="max-w-2xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-semibold tracking-tight mb-6">
          If It's Just Feelings, Marriage Becomes Meaningless
        </h2>

        <div className="space-y-3 text-[15px]">
          <div className="flex justify-start">
            <div className="bg-[#f1f0ed] rounded-3xl rounded-bl-lg px-5 py-3.5 max-w-[82%]">
              Love is love. Why does the government need to limit who can marry?
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-[#3b2a6e] text-white rounded-3xl rounded-br-lg px-5 py-3.5 max-w-[82%]">
              If marriage is just the government validating intense romantic feelings between consenting adults, there is no logical reason to limit it to two people. The same arguments used for same-sex marriage apply to polygamy and other arrangements.<sup className="text-[10px] text-[#57534e] ml-0.5">5</sup>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="bg-[#f1f0ed] rounded-3xl rounded-bl-lg px-5 py-3.5 max-w-[82%]">
              That's different. Polygamy has historical problems.
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-[#3b2a6e] text-white rounded-3xl rounded-br-lg px-5 py-3.5 max-w-[82%]">
              The principle is the same. Once you remove the male-female and procreative foundation, marriage is reduced to whatever emotional or sexual arrangement adults want the government to bless. At that point it means nothing in particular.<sup className="text-[10px] text-[#57534e] ml-0.5">5</sup>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="bg-[#f1f0ed] rounded-3xl rounded-bl-lg px-5 py-3.5 max-w-[82%]">
              So you're saying gay marriage will lead to people marrying their dogs or something?
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-[#3b2a6e] text-white rounded-3xl rounded-br-lg px-5 py-3.5 max-w-[82%]">
              No. I'm saying the institution has been stripped of any objective content. When marriage is just two (or more) people who feel strongly about each other, it no longer functions as a distinct social category with a real purpose.<sup className="text-[10px] text-[#57534e] ml-0.5">5</sup>
            </div>
          </div>
          <div className="flex justify-start pt-2">
            <div className="bg-[#f1f0ed] rounded-3xl rounded-bl-lg px-5 py-3.5 max-w-[82%]">
              Wow, you're really obsessed with this. Get a life.
            </div>
          </div>

          {/* Back to top */}
          <div className="flex justify-end mt-8">
            <button
              onClick={() => document.getElementById('arg-1').scrollIntoView({ behavior: 'smooth' })}
              className="text-sm text-[#3b2a6e] hover:underline flex items-center gap-1"
            >
              Back to the beginning ↑
            </button>
          </div>
        </div>
      </div>

      {/* Sources */}
      <div className="max-w-2xl mx-auto px-6 pb-20 pt-8 border-t border-[#e7e5e4]">
        <h3 className="text-lg font-semibold tracking-tight mb-4">Sources</h3>
        <div className="text-xs text-[#57534e] space-y-1.5 leading-relaxed">
          <p>1. Sherif Girgis, Ryan T. Anderson, and Robert P. George, <em>What Is Marriage? Man and Woman: A Defense</em> (Encounter Books, 2012).</p>
          <p>2. George P. Murdock, <em>Social Structure</em> (Macmillan, 1949). See also cross-cultural anthropological consensus on the male-female core of marriage.</p>
          <p>3. Sara McLanahan et al., “The Causal Effects of Father Absence,” <em>Annual Review of Sociology</em> 39 (2013): 399–427. See also CDC/NCHS data on family structure and child outcomes.</p>
          <p>4. <em>Masterpiece Cakeshop v. Colorado Civil Rights Commission</em>, 584 U.S. ___ (2018); <em>303 Creative LLC v. Elenis</em>, 600 U.S. ___ (2023). Additional cases document institutional pressure on religious organizations.</p>
          <p>5. Data on marriage rates, fertility, and family structure trends from CDC/National Center for Health Statistics and OECD Family Database (post-2015).</p>
        </div>
      </div>
    </div>
  )
}

export default App
