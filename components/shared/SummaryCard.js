import Image from "next/image"
const SummaryCard = ({image, label, summary, classname}) => {
  return (
    <div className={`flex justify-between items-center w-[32%] rounded-xl py-2 px-4 ${classname}`}>
      <div>
        <div className="flex gap-3 items-center"> 
          <Image src={image} alt="summarycard image" width={36} height={36} className='rounded-full object-cover'/>
          <h5 className="text-[rgba(255,_255,_255,_0.8)] font-semibold">{label}</h5>
        </div>
      </div>

      <div>
        <p className="text-[rgba(255,_255,_255,_.8)] font-normal">{summary}</p>
      </div>
    </div>
  )
}
export default SummaryCard;
