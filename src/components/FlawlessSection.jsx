import React from 'react'

function FlawlessSection() {
  return (
    <div className='lg:mt-0 lg:px-20 px-5'>
      <img src='https://odoocdn.com/openerp_website/static/src/img/arrows/grey_arrow_md_04.svg' className='mx-auto lg:block hidden' />
      <h1 className='lg:text-7xl text-3xl font-bold text-white my-5'>Flawless replenishments
      </h1>
      <p className='lg:text-lg text-base'><strong className='text-white'>Never run out-of-stock </strong> with smart replenishment strategies like min-max rules, MTO, or the master production schedule. Let Atelier propose, or trigger purchase orders automatically. Then automate vendor follow-ups to minimize communication risks : PO acknowledgment, receipt schedule confirmation a few days before, etc.</p>


      <div className="flex lg:flex-row md:flex-row flex-col justify-evenly items-center text-center py-4 rounded-md mt-5">

        <div className="flex flex-col items-center h-48 justify-end">
          <img src="https://odoocdn.com/openerp_website/static/src/img/icons/blue_truck.svg" className="lg:h-40 lg:w-40 md:h-20" />
          <h5 className="lg:text-4xl text-3xl mt-2 text-white font-semibold">Replenishment</h5>
        </div>

        <div className="flex items-end">
          <img src="https://odoocdn.com/openerp_website/static/src/img/arrows/arrow_dot_02.svg" className="-rotate-90 lg:block md:block hidden lg:w-auto md:w-5" />
        </div>

        <div className="flex flex-col items-center h-48 justify-end">
          <img src="https://odoocdn.com/openerp_website/static/src/img/icons/yellow_shield_2.svg" className="lg:h-32 lg:w-32 md:h-20" />
          <h5 className="lg:text-4xl text-3xl mt-2 text-white font-semibold">Quality control</h5>
        </div>

        <div className="flex items-end">
          <img src="https://odoocdn.com/openerp_website/static/src/img/arrows/arrow_dot_02.svg" className="-rotate-90 lg:block md:block hidden lg:w-auto md:w-5" />
        </div>

        <div className="flex flex-col items-center h-48 justify-end">
          <img src="https://odoocdn.com/openerp_website/static/src/img/icons/hand-truch.svg" className="lg:h-32 lg:w-32 md:h-20" />
          <h5 className="lg:text-4xl text-3xl mt-2 text-white font-semibold">Storage</h5>
        </div>

      </div>

    </div>
  )
}

export default FlawlessSection