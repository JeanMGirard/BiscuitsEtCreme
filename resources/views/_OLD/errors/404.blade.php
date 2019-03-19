@extends('layout')
@section('title', '404')

@section('content')
    	<!-- breadcrumb-area-start -->
		<div class="breadcrumb-area pt-160 pb-170" style="background-image:url(img/bg/bg15.jpg)">
			<div class="container">
				<div class="row">
					<div class="col-xl-12">
						<div class="breadcrumb-text text-center">
							<h1>404</h1>

							<div class="four-zero-text">
								<h1>Page Not Found</h1>
								<a class="btn" href="{{ route('rte_home') }}">Go To Home</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- breadcrumb-area-end -->




		<!-- Modal Search -->
        <div class="modal fade" id="search-modal" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <form>
                        <input type="text" placeholder="Search here...">
                        <button>
                            <i class="fa fa-search"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
@stop

	