import BlockTransition from "./Animated"
export default function Block (props: any) {
  return (
    <BlockTransition>
      <div className='relative bg-white px-4 md:px-5 py-9 mb-7 border border-gray-50 rounded-2xl overflow-hidden shadow-md'>
        {props.children}
      </div>
    </BlockTransition>
  )
}
