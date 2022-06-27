import React,{useState} from 'react';
import moment from 'moment';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faMoon, faBell, faArrowUp, faArrowDown,faCircleCheck, faTicket,faHourglass,faTrashCan,faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import profile from '../../asset/download.jpeg'
import './Dashboard.css';

library.add(fab, faMoon, faBell,faArrowUp,faArrowDown,faCircleCheck,faTicket,faHourglass,faTrashCan,faPlus)

function Dashboard() {
    const [projectName, setProjectName ] = useState('')
    const [title, setTitle ] = useState('')
    const [clientName, setClientname ] = useState('')
    const [dueDate, setDueDate ] = useState('')
    const [status, setStatus ] = useState('')
    const [priority, setPriorty ] = useState('')
    const [searchValue, setSearchValue ] = useState('')
    const [modal, setModal] = useState('')
    const [arrList, setArrList] = useState([
        {   
            p_name : 'Minia-v1.0.0',
            title : 'Post launch reminder/Post List' ,
            c_name : 'Joseph Parker',
            date : '26 JUN 22',
            status:'COMPLETED',
            priority:'HIGH'
          },
          {
            p_name : 'Skote-v1.0.0',
            title : 'Apologize for shopping Error',
            c_name : 'Nathan Cole',
            date : '23 Jan 22',
            status:'COMPLETED',
            priority:'HIGH'
        }
    ]) 

    const handleSubmit = (e) => {
        e.preventDefault();
        if(projectName && title && clientName && dueDate && status && priority) {            
            setArrList((arrList)=>[
                ...arrList,
                {
                    p_name : projectName,
                    title : title,
                    c_name : clientName,
                    date : dueDate,
                    status:status,
                    priority: priority
            }])
            setModal('modal')
            setProjectName('');
            setTitle('')
            setClientname('')
            setDueDate('')
            setStatus('')
            setPriorty('')
        } else {
            // alert('Please fill all the field for valid Task')
        }
    }

    const dataSearch = (e) => {
          setSearchValue(e.target.value)
         if(searchValue.length === 0){
             setArrList(arrList)
         } else{
             let tableArr = arrList.filter((item)=>{
                return Object.keys(item).some(key =>
                   item[key].toLowerCase().includes(searchValue.toLowerCase()))
            })
          setArrList(tableArr)
         }
         
    }
        
  return (
    <>
      <div className='container-fluid container-wrapper'>
          <div className='container container-size'>
          <div className='row'>
              <div className='col-lg-2  col-md-2 col-2'>
                  <h2 className='me-1'>VeLZON</h2>
              </div>
              <div className='col-lg-4 col-md-4 col-4'>
              <input type="search" className="form-control bg-gray"  placeholder="Search" />
              </div>
              <div className='col-lg-6 col-md-6 clo-6'>
                  <div className='header-profile'>
                  <div className='header-icons'>
                  <FontAwesomeIcon icon="fa-solid fa-bell"  />
                  <FontAwesomeIcon icon="fa-solid fa-moon" className='mr-5' />
                  </div>
                      <div>
                          <img src={profile} className='profile-img' alt='profile'  />
                      </div>
                      <div>
                          <h6>Anna Adame</h6>
                          <span className='text-muted'>Founder</span>
                      </div>
                  </div>
              </div>

          </div>
          </div>
          <div className='container mt-5 '>
              <div className='row' >
                  <div className='col-lg-3 col-md-6'>
                      <div className='card card-wrapper'>
                        <div className='card-icon-wrapper'>
                           <p>Total Tasks</p>
                           <FontAwesomeIcon icon="fa-solid fa-ticket" className='card-icon card-icon1' />
                            </div>
                        <h3>234k</h3>
                        <div className='card-value'>
                        <p className='cus-value'><FontAwesomeIcon icon="fa-solid fa-arrow-up" /> 17.32%</p>
                        <span className='ml-2'>vs. previous month</span>
                        </div>
                      </div>
                  </div>
                  <div className='col-lg-3 col-md-6'>
                  <div className='card card-wrapper'>
                        <div className='card-icon-wrapper'>
                           <p>Pending Tasks</p>
                           <FontAwesomeIcon icon="fa-solid fa-hourglass" className='card-icon card-icon2' />
                            </div>
                        <h3>64.5k</h3>
                        <div className='card-value'>
                        <p className='cus-value-red'><FontAwesomeIcon icon="fa-solid fa-arrow-down" /> 0.87%</p>
                        <span className='ml-2'>vs. previous month</span>
                        </div>
                      </div>
                  </div>
                  <div className='col-lg-3 col-md-6'>
                  <div className='card card-wrapper'>
                        <div className='card-icon-wrapper'>
                           <p>completed Tasks</p>
                           <FontAwesomeIcon icon="fa-solid fa-circle-check" className='card-icon card-icon3' />
                            </div>
                        <h3>116.21k</h3>
                        <div className='card-value'>
                        <p className='cus-value-red'><FontAwesomeIcon icon="fa-solid fa-arrow-down" /> 2.62%</p>
                        <span className='ml-2'>vs. previous month</span>
                        </div>
                      </div>
                  </div>
                  <div className='col-lg-3 col-md-6'>
                  <div className='card card-wrapper'>
                        <div className='card-icon-wrapper'>
                           <p>Deleted Tasks</p>
                           <FontAwesomeIcon icon="fa-solid fa-trash-can" className='card-icon card-icon4' />
                            </div>
                        <h3>14.84%</h3>
                        <div className='card-value'>
                        <p className='cus-value'><FontAwesomeIcon icon="fa-solid fa-arrow-up" /> 0.63%</p>
                        <span className='ml-2'>vs. previous month</span>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className='container mt-5 container-size'>
              <div className='row'>
                  <div className='col-lg-6 col-md-6 col-6'>
                      <div className='table-top-heading'>
                          <h4>All Tasks</h4>
                      </div>
                  </div>
                  <div className='col-lg-6 col-md-6 col-6'>
                      <div className='table-top-btn'>
                          <button type='button' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setModal('')} className='btn btn-danger'>
                          <FontAwesomeIcon icon="fa-solid fa-plus" />  Create Task</button>
                      </div>
                  </div>
              </div>
              <hr />
              <div className='row'>
                  <div className='col-lg-4 col-md-4 col-4'>
                  <input type="search" className="form-control bg-gray" value={searchValue}  onChange={(e)=> dataSearch(e)}  placeholder="Search for tasks or something..." />
                  </div>
                  <div className='col-lg-4 col-md-4 col-4'>
                  <input type="search" className="form-control bg-gray"  placeholder="Select date range" />
                  </div>
                  <div className='col-lg-4 col-md-4 col-4'>
                  <input type="search" className="form-control bg-gray"  placeholder="All" />
                  </div>
              </div>
              <div className='mt-3'>
              <table className="table">
  <thead className="table-light">
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">Project</th>
      <th scope="col">Task</th>
      <th scope="col">Client Name</th>
      <th scope="col">Due Date</th>
      <th scope="col">Status</th>
      <th scope="col">Priority</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
  {arrList.map((item,index)=>(
        <tr key={index}>
        <th scope="row">{index + 1}</th>
        <td>{item.p_name}</td>
        <td>{item.title}</td>
        <td>{item.c_name}</td>
        <td>{moment(item.date).format('ll')}</td>
        <td className={
            item.status === 'COMPLETED' ? 'text-success' : 'text-info'
        } >{item.status}</td>
        <td className={
            item.priority === 'HIGH' ? 'text-danger' : 'text-warning'
        }>{item.priority}</td>
      </tr>
      ))}
    
  </tbody>
</table>
              </div>
          </div>
      </div>

      <div className="modal fade" id="exampleModal" tabIndex={-1}  aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header bg-info">
        <h5 className="modal-title" id="exampleModalLabel">Add Task</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form onSubmit={handleSubmit}>
      <div className="modal-body">
          <div className="mb-3">
            <label className="col-form-label">Project Name</label>
            <input type="text" className="form-control" required value={projectName} onChange={(e) => setProjectName(e.target.value)} placeholder='Project Name' />
          </div>
          <div className="mb-3">
            <label className="col-form-label">Title</label>
            <input type="text" className="form-control" required value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title'  />
          </div>
          <div className="mb-3">
            <label className="col-form-label">Client Name</label>
            <input type="text" className="form-control" required value={clientName} onChange={(e) => setClientname(e.target.value)} placeholder='Client Name' />
          </div>
          <div className='mb-3 row'>
              <div className='col-md-6'>
              <label className="col-form-label">Due Date</label>
              <input type="date" className="form-control" required value={dueDate} onChange={(e) => setDueDate(e.target.value)} placeholder='Due Date' />
              </div>
              <div className='col-md-6'>
              <label className="col-form-label">Status</label>
             <input type="text" className="form-control dropdown-toggle" required value={status}  
              placeholder='Status' data-bs-toggle="dropdown" aria-expanded="false" aria-label="Text input with dropdown button" />
              <ul className="dropdown-menu dropdown-menu-end">
               <li><a className="dropdown-item"  onClick={() => setStatus('COMPLETED')}>COMPLETED</a></li>
               <li><a className="dropdown-item"  onClick={() => setStatus('PENDING')}>PENDING</a></li>
               <li><a className="dropdown-item"  onClick={() => setStatus('INPROGRESS')}>INPROGRESS</a></li>
               <li><a className="dropdown-item"  onClick={() => setStatus('NEW')}>NEW</a></li>
              </ul>
              </div>
          </div>
          <div className="mb-3">
            <label className="col-form-label">Priority</label>
            <input type="text" className="form-control dropdown-toggle" required value={priority} 
             placeholder='Priority' data-bs-toggle="dropdown" aria-expanded="false" aria-label="Text input with dropdown button" />
             <ul className="dropdown-menu dropdown-menu-end">
               <li><a className="dropdown-item"  onClick={() => setPriorty('HIGH')}>HIGH</a></li>
               <li><a className="dropdown-item"  onClick={() => setPriorty('MEDIUM')}>MEDIUM</a></li>
               <li><a className="dropdown-item"  onClick={() => setPriorty('LOW')}>LOW</a></li>
            </ul>
          </div>
      </div>
      
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-success"  data-bs-dismiss={modal} >Add Task</button>
      </div>
      </form>
      
    </div>
  </div>
</div>
    </>
  );
}

export default Dashboard;
