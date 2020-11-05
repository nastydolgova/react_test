@extends('layouts.app')

@section('content')

<div class="Header">
    <div class="container">
        <div class="menu-block">
            <nav class="Menu">
                <a aria-current="page" class="menu-links" href="/">На главную</a>
                <a class="button-link" href="/login">Войти</a>
            </nav>
        </div>
    </div>
</div>


<div class="container">
    <div class="form-block">
        <h1 class="auth-header">{{ __('Регистрация') }}</h1>
        <form class="auth-form" method="POST" action="{{ url('/register') }}">
            @csrf
            <div class="form-row">
                <input id=" name"  type="text" class="admin-inputs" name="name" value="{{ old('name') }}" placeholder="Имя" required autofocus>
                @if ($errors->has('name'))
                    <span class="help-block">
                    <strong>{{ $errors->first('name') }}</strong>
                </span>
                @endif
                <input id="family" type="text" class="admin-inputs" name="family" value="{{ old('family') }}" placeholder="Фамилия" required autofocus>
                @if ($errors->has('family'))
                    <span class="help-block">
                    <strong>{{ $errors->first('family') }}</strong>
                </span>
                @endif
                <input id="phone" type="text" class="admin-inputs" name="phone" value="{{ old('phone') }}" placeholder="Телефон" required autofocus>
                @if ($errors->has('phone'))
                    <span class="help-block">
                    <strong>{{ $errors->first('phone') }}</strong>
                </span>
                @endif
            </div>
            <div class="form-row">
                <input id="email" type="email" class="admin-inputs @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" placeholder="{{ __('e-mail') }}" required autocomplete="email" autofocus>
                @error('email')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
                @enderror
                <input id="password" type="password" class="admin-inputs @error('password') is-invalid @enderror" placeholder="{{ __('Пароль') }}" name="password" required autocomplete="current-password">
                <input id="password-confirm" type="password" class="admin-inputs" name="password_confirmation" placeholder="{{ __('Подтвердить') }}" required>
                @error('password')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $password }}</strong>
                </span>
                @enderror
            </div>
            <button type="submit" class="auth-button">
                {{ __('зарегистрироваться') }}
            </button>
        </form>
    </div>
</div>




@endsection
