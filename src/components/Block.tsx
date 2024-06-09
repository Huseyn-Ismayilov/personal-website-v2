import BlockTransition from './Animated'
export default function Block (props: any) {
  return (
    <BlockTransition>
      <div
      className='py-5 overflow-hidden'
       >
        {props.children}
      </div>
    </BlockTransition>
  )
}
