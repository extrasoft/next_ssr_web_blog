import React, { Component } from 'react';
import Layout from '../components/Layout';
import axios from 'axios';
import Link from 'next/link';

class Index extends Component {

  /* 
    method getInitialProps() from NextJS 
    สำหรับนำข้อมูลมากำหนดให้กับ Props ตอนที่เริ่มโหลดหน้าเว็บ
  */
  static async getInitialProps() {
    const res = await axios.get('http://localhost:3001/blogs');
    return {
      blogs: res.data
    }
  }

  renderBlogs = blogs => {
    return (
      blogs.map(blog => {
        return (
          <div key={blog.id} className='col-6'>
            <img src={blog.thumbnail} className='img-fluid' />
            <h4 className='mt-3'>
              <Link href={'/blog/detail?id='+blog.id}>
                {blog.subject}
              </Link>              
            </h4>
            <hr />
            <p className='text-justify'>{blog.intro}</p>
          </div>
        );
      })
    );
  }

  render() {
    
    const { blogs } = this.props;
    // console.log(blogs)
    return (
      <Layout title='Index'>
        <div className='container'>
          <div className='row'>
            { this.renderBlogs(blogs) }
          </div>
        </div>
      </Layout>
    );
  }
}

export default Index;