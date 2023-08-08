import React from 'react';
import root from '../root.module.css';
import classes from './detail.module.css';

export const Detail: React.FC = () => {
  return (
    <section id='detail' className={classes.container}>
      <ol>
        <li className={classes.place}>
          <h2 className={root.left}>The Place-Making Dimension:</h2>
          <div className={classes.subtitle}>
            Designing and growing a Tree Temple garden from living trees with Living Architecture
          </div>
          <div className={classes.text}>
            <p>
              Gradual tree shaping is an ancient method of gradually shaping and merging living trees into an artificial shape for the purpose of growing self-bearing living structures such as buildings (Living Architecture) or design objects and sculptures (Arborsculpture).
            </p>
            <p>
              Growing a communally planned temple structure over years implies a learning-by-doing process regarding local ecology, tree lore and the specific behaviour and needs of the involved trees. 
            </p>
            <p>
              Habituative responsibilities like care-taking routines and shaping procedures, foster the development of an intimate dialogues relationship with the trees among the participants. 
            </p>
          </div>
          <div className={classes.images}>
            <img className={classes.plantingGirls} src="/img/plantingGirls.png" alt=''/>
            <img className={classes.fluteGirls} src="/img/fluteGirls.png" alt=''/>
          </div>
        </li>
        <li className={classes.community}>
          <img className={classes.treetemple} src="/img/baumhaus.png" alt=''/>
          <h2>The Community-Making Dimension:</h2>
          <div className={classes.subtitle}>
            Developing the temple as a cultural place
          </div>
          <div className={classes.text}>
            <p>
              The communities interpretation and enlivenment of the temple garden include the negotiation of shared values and visions for the place as well as the generation of cultural rituals around the material tasks, which further support the recognition of the trees as active participants.
            </p>
            <p>
              It invites intergenerational and intercultural exchange around the shared object of care and creation.
            </p>
          </div>
        </li>
      </ol>
      <div className={classes.bar}>
        <p>
          The Tree Temple is not only a processual living structure, but also stands for a communally negotiated vision about how a flourishing temple garden would be like. The social flourishing is represented by the health and shape of the growing structure.
        </p>
        <p>
          Metaphorically speaking: <em>We plant a vision and let it grow.</em> 
        </p>
      </div>
    </section>
  )
}
  
export default Detail;
  