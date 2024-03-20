import styles from "./Tabs.module.scss";

type TabsProps = {
    categories: any,
    currentFilter: any,
    setCurrentFilter: any
}

export default function Tabs({categories, currentFilter, setCurrentFilter}:TabsProps){

    function handleClick(button:string){
      setCurrentFilter({category:button});
    };

    return <section className={styles.tabs}>
    {
      categories.map((item:any, index:any) => {
        return <div 
          key={index} 
          className={`${styles.button} ${currentFilter.category === item ? styles.activeButton : ""}`}
          onClick={() => handleClick(item)}
        >
          {item}
        </div>             
      })
    }
  </section>
}