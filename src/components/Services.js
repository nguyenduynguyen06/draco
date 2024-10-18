import Card from "./Card";
function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">OUR VISION</h2>
        <div className="text-intro">Draco aims to become the leading investment consulting center in Vietnam, guiding sustainable development for the companies within our ecosystem through strategic investment funds, in order to optimize growth potential and enhance competitive capacity for many years to come.</div>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card title="Become a Leading Investor" img="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2022/06/shutterstock_698007868-1.jpg" text="Draco aims to be a reputable and influential investor in its ecosystem." />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Provide Capital, Knowledge, and Support" img="https://hoilhpn.org.vn/documents/20182/6073467/1_Dec_2023_071547_GMT1_Dec_2023_071547_GMTluat_4.jpg/7524d165-e547-4691-8816-dcf2ef9078db" text="In addition to investment capital, the company will offer in-depth knowledge about management, strategy, technology, etc., as well as other necessary support to the companies in the ecosystem." />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Sustainable Development and Long-term Success" img="https://taca.com.vn/wp-content/uploads/2023/06/phat-trien-ben-vung.png" text="The ultimate goal is to help the companies in the ecosystem achieve sustainable growth and development over many years, not just short-term profits" />
                    </div>
                </div>
            </div>
        </div>
        <div className="text-intro">This vision clearly reflects the goal of becoming a top investor, providing not only capital but also knowledge and support for the companies in the ecosystem to develop sustainably in the long term. This will create strength and core value for both Draco and the companies within its ecosystem</div>
    </div>
  );
}
export default Services;
