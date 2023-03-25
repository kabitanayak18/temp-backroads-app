
import Title from './Title'
import { servicesdata } from '../data'
import Service from './Service'
 const Services = () => {
  return (
    <section className="section services" id="services">
       <Title title="our" subTitle="services"></Title>    
      <div className="section-center services-center">
        {
          servicesdata.map((data)=>{
            return (<Service key={data.id} {...data}/>);
          })
        }        
      </div>
    </section>
  )
}

export default Services