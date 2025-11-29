import React from 'react'

function FlawlessSection() {
  return (
    <div className='mt-30 px-20'>
      <img src='https://odoocdn.com/openerp_website/static/src/img/arrows/grey_arrow_md_04.svg' className='mx-auto' />
      <h1 className='text-7xl font-bold text-white my-5'>Flawless
        <span className='mx-3' style={{
          backgroundImage: `url(https://odoocdn.com/openerp_website/static/src/img/highlights/red_highlight_03.svg)`,
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          whiteSpace: "nowrap"
        }}>
          replenishments
        </span>
      </h1>
      <p className='text-lg'><strong className='text-white'>Never run out-of-stock </strong> with smart replenishment strategies like min-max rules, MTO, or the master production schedule. Let Odoo propose, or trigger purchase orders automatically. Then automate vendor follow-ups to minimize communication risks : PO acknowledgment, receipt schedule confirmation a few days before, etc.</p>


      <div className="flex justify-evenly items-center text-center py-4 rounded-md mt-5">

        <div className="flex flex-col items-center h-48 justify-end">
          <img src="https://odoocdn.com/openerp_website/static/src/img/icons/blue_truck.svg" className="h-40 w-40" />
          <h5 className="text-4xl mt-2 text-white font-semibold">Replenishment</h5>
        </div>

        <div className="flex items-end">
          <img src="https://odoocdn.com/openerp_website/static/src/img/arrows/arrow_dot_02.svg" className="-rotate-90" />
        </div>

        <div className="flex flex-col items-center h-48 justify-end">
          <img src="https://odoocdn.com/openerp_website/static/src/img/icons/yellow_shield_2.svg" className="h-32 w-32" />
          <h5 className="text-4xl mt-2 text-white font-semibold">Quality control</h5>
        </div>

        <div className="flex items-end">
          <img src="https://odoocdn.com/openerp_website/static/src/img/arrows/arrow_dot_02.svg" className="-rotate-90" />
        </div>

        <div className="flex flex-col items-center h-48 justify-end">
          <img src="https://odoocdn.com/openerp_website/static/src/img/icons/hand-truch.svg" className="h-32 w-32" />
          <h5 className="text-4xl mt-2 text-white font-semibold">Storage</h5>
        </div>

      </div>

    </div>
  )
}

export default FlawlessSection