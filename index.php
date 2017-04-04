<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title> 

        <link rel="stylesheet" href="css/normalize.css" />
        <link rel="stylesheet" href="css/ion.rangeSlider.css" />
        <link rel="stylesheet" href="css/ion.rangeSlider.HTML5.css" />
        <link rel="stylesheet" href="css/font-awesome.min.css">
        <link rel="stylesheet" href="css/style.css" type="text/css" >
        <link href="https://cdn.rawgit.com/noelboss/featherlight/1.5.0/release/featherlight.min.css" type="text/css" rel="stylesheet" />
    </head>
    <body>
        <div class="content-wrapper">
            <div class="header">
                <div class="header-text">

                    <span>GET AN ESTIMATE</span><br><br>Use our tool to quickly estimate the cost of your ad based on your desired ad size and distribution area    
                </div>
            </div> 


            <div class="full-content">    

                <div class="full-content-left">
                    <div class="full-content-left-raw">
                        <div class="full-content-left-label">
                            <div class="full-content-left-label-number">1</div> <div class="full-content-left-labe-text"> AD CATEGORY</div>
                        </div>
                        <div class="full-content-left-operation">
                            <select id="advertise">
                                <option value="10">Automotive</option>
                                <option value="11">Aviation</option>
                                <option value="12">Boating</option>
                                <option value="14">Business For Sale</option>
                                <option value="13">Business Opportunities</option>
                                <option value="15">Careers</option>
                                <option value="16">Franchising</option>
                                <option value="17">Legal Notices</option>
                                <option value="18">Leisure Travel</option>
                                <option value="19">Real Estate − Commercial</option>
                                <option value="20">Real Estate − Residential</option>
                            </select>
                        </div>

                    </div>

                    <div class="full-content-left-raw">
                        <div class="full-content-left-label">
                            <div class="full-content-left-label-number">2</div> <div class="full-content-left-labe-text">DISTRIBUTION AREA</div>
                        </div>
                        <div class="full-content-left-operation">
                            <select id="distribution_area" onchange="changeImage();ResetCategoryChange();">
                                <option value="National1">National – United States Region</option>
                                <option value="Europe1">Europe Region</option>
                                <option value="Asia1">Asia Region</option>
                                <option value="Arizona1">Arizona Region</option>
                                <option value="Chicago1">Chicago Region</option>
                                <option value="Detroit1">Detroit Region</option>
                                <option value="Eastern-011">Eastern Region</option>
                                <option value="Florida-011">Florida Region</option>
                                <option value="Midwest1">Midwest Region</option>
                                <option value="New-England-011">New England Region</option>
                                <option value="Greater-NY-011">New York Region</option>
                                <option value="Northeast-01-300x300">Northeast Region</option>
                                <option value="Ncalifornia1">Northern California Region</option>
                                <option value="Ohio1">Ohio Region</option>
                                <option value="Pacific-N.West-011">Pacific Northwest Region</option>
                                <option value="Rocky-Mountain1">Rocky Mountain Region</option>
                                <option value="South-Atlantic-011">South Atlantic Region</option>
                                <option value="Southern-011">Southern Region</option>
                                <option value="S.-California1">Southern California Region</option>
                                <option value="Southwest1">Southwest Region</option>
                                <option value="St.-Louis1">St. Louis Region</option>
                                <option value="Washington_Baltimore-011">Washington/Baltimore Region</option>
                                <option value="Western1">Western Region</option>
                            </select>

                            <div class="mapThumb" id="mapSmall">
                                <a href="img/National1.png" class="mapzoom"  data-featherlight="image">
                                    <span><i><img src="img/National1.png" alt=""></i></span>
                                    <i class="fa fa-search-plus fa-2x" style="right: -18px;bottom: 18px;"></i>

                                </a>
                            </div>

                        </div>

                    </div>

                    <div class="full-content-left-raw">
                        <div class="full-content-left-label">
                            <div class="full-content-left-label-number">3</div> <div class="full-content-left-labe-text">WIDTH</div>
                        </div>
                        <div class="full-content-left-operation">

                            <div class="range"><input type="text" id="range" value="" name="range" /></div>

                        </div>

                    </div>

                    <div class="full-content-left-raw">
                        <div class="full-content-left-label">
                            <div class="full-content-left-label-number">4</div> <div class="full-content-left-labe-text">HEIGHT</div>
                        </div>
                        <div class="full-content-left-operation">
                            <div class="range"><input type="text" id="range1" value="" name="range" /></div>
                        </div>

                    </div>




                </div>

                <div class="full-content-right">

                    <div class="estimateResult-area">
                        <div class="estimateGraphSec">
                            <p id="column_depth" style="display: none;">1 Column x 1” Height</p>
                            <div class="estimateGraph"><div class="estimateGraphInner" style="height: 0%; width: 0%;"></div></div>
                            <p id="unit_size" style="display: none;">Unit Size (1.68”) x 1”</p>
                        </div>



                        <div class="est-other">
                            <div class="est-price" style="display: none;">
                                <p>Estimated Price*</p>
                                <div class="ajax_loading_div">
                                    <img src="http://wsj-staging.developspa.com/wp-content/themes/wallstreet/img/ajax_loading.gif" id="ajax_loading" style="display: none;">
                                </div>
                                <h2 id="total_estimated_price" style="display: block;">$0.00</h2>
                            </div>
                            <ul>
                                <li><a href="javascript:void(0)" onclick="ResetFormData()" id="reset_from_data"><span>Reset</span><i class="fa fa-refresh fa-2x"></i></a></li>
                                <li><a href="javascript:void(0)" onclick="DownloadPDF()"><span>Download PDF</span><i class="fa fa-cloud-download fa-2x"></i></a></li>
                            </ul>
                            <p>
                                *All prices based off of 1 day WSJ Print.               All rates listed are gross and for B&amp;W               advertising. Rates are subject to change.						</p>
                        </div>
                    </div>
                </div>
            </div>    

        </div>
        
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
        <script src="js/ion.rangeSlider.js"></script>
        <script src="https://use.fonticons.com/ffe176a3.js"></script>
        <script src="https://cdn.rawgit.com/noelboss/featherlight/1.5.0/release/featherlight.min.js" type="text/javascript" charset="utf-8"></script>
        <script type="text/javascript" src="http://wsj-staging.developspa.com/wp-content/themes/wallstreet/js/jquery.selectbox-0.2.js"></script>
        <script src="js/wsj.js"></script>

    </body>
</html>
