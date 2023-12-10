import React from 'react'
import CardTemplate from '../../components/CardTemplate'
import CardImg from '../../components/CardImg'

import typesSU from "../../imgs/typesSU.png"
import partsSU from "../../imgs/partsSU.png"
import typesMobo from "../../imgs/typesMobo.png"
import partsMobo from "../../imgs/partsMobo.png"
import PSUC from "../../imgs/PSUC.png"
import expAndAdap from "../../imgs/expAndAdap.png"
import pgaVSlga from "../../imgs/pgaVSlga.png"
import typesMem from "../../imgs/typesMem.png"
const ComputerComponentsAndOSs = () => {
  return (
    <>
      <CardTemplate
        title="Computer Components & Operating Systems"
        desc1="Internal Component - devices that are connected to your computer's motherboard or built-in 
        to the motherboard.  Added on an expansion card or a device attached to the motherboard is also 
        considered internal component. For example, a video card is an internal device and a printer is 
        an external device. When referring to a drive, an internal drive (e.g., internal hard drive) is 
        any drive inside the computer."
        desc2="External Components - Any peripheral device that is not housed inside the computer 
        cabinet. Monitors, keyboards, mice and printers are inherently external devices; however, 
        drives, network adapters and modems may also be external."
      />
      <CardTemplate
        title="System Units"
        desc1="The system unit, also known as a Tower or Chasis, is the main part of a desktop computer. 
        It includes the motherboard, CPU, RAM, and other components. The system unit also includes the 
        case that houses the internal components of the computer."
      />
      <CardImg
        title="Types of System Units"
        img={typesSU}
      />
      <CardImg
        title="Parts of a System Units"
        img={partsSU}
      />
      <CardTemplate
        title="The Motherboard"
        desc1="Also called the system board, is the main circuit board of the system unit. Many 
        electronic components attach to the motherboard and others are built into it."
      />
      <CardImg
        title="Types of Motherboards"
        img={typesMobo}
      />
      <CardImg
        title="Parts of a Motherboards"
        img={partsMobo}
      />
      <CardImg
        title="Power Supply and Cables"
        img={PSUC}
      />
      <CardImg
        title="Expansion Cards and Adapter Slot"
        width = {1}
        img={expAndAdap}
      />
      <CardImg
        title="Types of System Units"
        img={pgaVSlga}
      />
      <CardImg
        title="Types of System Units"
        img={typesMem}
      />
    </>
  )
}
export default ComputerComponentsAndOSs